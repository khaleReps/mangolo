# Dockerfile

# Stage 1: Build the frontend
FROM node:16-alpine as frontend-build
WORKDIR /app/mangolo/frontend
COPY mangolo/frontend/package.json /mangolo/frontend/package-lock.json ./
RUN npm ci --silent
COPY mangolo/frontend/public ./public
COPY mangolo/frontend/src ./src
RUN npm run build

# Stage 2: Build the backend
FROM node:16-alpine as backend-build
WORKDIR /app/mangolo/backend
COPY mangolo/backend/package.json /mangolo/backend/package-lock.json ./
RUN npm ci --silent
COPY mangolo/backend/server.js ./
COPY mangolo/backend/routes ./routes
COPY mangolo/backend/models ./models


# Stage 3: Combine frontend and backend
FROM node:16-alpine
WORKDIR /app/mangolo
COPY --from=frontend-build /app/mangolo/frontend/build ./frontend/build
COPY --from=backend-build /app/mangolo/backend .
RUN npm install --only=production

# Set environment variables if necessary
# ENV NODE_ENV production
# ENV PORT 5000

EXPOSE 3013
CMD ["npm", "start"]

EXPOSE 5013
CMD ["node", "server.js"]

# docker build -t mangolo-app .
#  docker run -p 3013:5013 mangolo-app