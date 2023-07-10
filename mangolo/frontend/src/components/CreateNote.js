import React, { useState } from 'react';
import axios from 'axios';

const CreateNote = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault('Submit button clicked');
    const newNote = {
      title,
      content,
    };
    try {
      await axios.post('/notes/add', newNote);
      props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Create New Note</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            required
            className="form-control"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label>Content: </label>
          <textarea
            required
            className="form-control"
            rows="5"
            value={content}
            onChange={handleContentChange}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Note"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
