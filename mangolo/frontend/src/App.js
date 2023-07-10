import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/edit/:id" element={<EditNote />} />
          <Route path="/create" element={<CreateNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
