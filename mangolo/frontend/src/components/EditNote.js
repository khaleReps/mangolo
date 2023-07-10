import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditNote = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`/notes/${props.match.params.id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNote(); // Add fetchNote function directly in the useEffect

  }, [props.match.params.id]); // Add props.match.params.id as a dependency

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedNote = {
      title,
      content,
    };
    try {
      await axios.post(`/notes/update/${props.match.params.id}`, updatedNote);
      props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Edit Note</h3>
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
            value="Update Note"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditNote;
