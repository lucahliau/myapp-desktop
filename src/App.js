// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Upload from './Upload';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/" element={<Signup />} />  {/* or redirect to login */}
          <Route path="/myposts" element={<MyPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
