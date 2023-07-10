import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/notes');
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Notes</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note._id}>
              <td>{note.title}</td>
              <td>
                <Link to={`/edit/${note._id}`} className="btn btn-primary mr-2">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteNote(note._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotesList;
