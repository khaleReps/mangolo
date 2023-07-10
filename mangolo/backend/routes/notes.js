const router = require('express').Router();
const Note = require('../models/Note');

// Get all notes
router.get('/', (req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new note
router.post('/add', (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({
    title,
    content,
  });

  newNote
    .save()
    .then(() => res.json('Note added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get a note by ID
router.get('/:id', (req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update a note by ID
router.post('/update/:id', (req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      note.title = req.body.title;
      note.content = req.body.content;

      note
        .save()
        .then(() => res.json('Note updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete a note by ID
router.delete('/:id', (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
