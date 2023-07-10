const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5013;
const CRED = 'mongodb+srv://demo_user:fakepassword3000@cluster0.2hwndnw.mongodb.net/?retryWrites=true&w=majority';

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(CRED, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter);

