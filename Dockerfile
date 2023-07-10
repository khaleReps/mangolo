# Dockerfile

# Stage 1: Build the frontend
FROM node:14.17.1 as frontend-build
WORKDIR /app/mangolo/frontend
COPY mangolo/frontend/package.json mangolo/frontend/package-lock.json ./
RUN npm ci --silent
COPY mangolo/frontend/public ./public
COPY mangolo/frontend/src ./src
RUN npm run build

# Stage 2: Build the backend
FROM node:14.17.1 as backend-build
WORKDIR /app/mangolo/backend
COPY mangolo/backend/package.json mangolo/backend/package-lock.json ./
RUN npm ci --silent
COPY backend/server.js ./
COPY backend/routes ./routes
COPY backend/models ./models

# Stage 3: Combine frontend and backend
FROM node:14.17.1
WORKDIR /appmangolo/
COPY --from=frontend-build /app/mangolo/frontend/build ./mangolo/frontend/build
COPY --from=backend-build /app/mangolo/backend .
RUN npm install --only=production

# Set environment variables if necessary
# ENV NODE_ENV production
# ENV PORT 5000

EXPOSE 5000
CMD ["node", "server.js"]
