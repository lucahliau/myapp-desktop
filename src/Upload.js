// src/Upload.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Upload() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('text', text);

    try {
      // Optionally, you can add an Authorization header if needed
      const token = localStorage.getItem('token');
      const response = await axios.post('https://myapp-backend-demo-4fa256f8580e.herokuapp.com/api/posts/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Post created successfully!');
      setText('');
      setImage(null);
      // Optionally, navigate to another page or clear the form
    } catch (err) {
      setMessage('Error creating post.');
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Create a Post</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Post Text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Select Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Upload Post</button>
      </form>
      <p>
        See your uploaded posts here <a href="/myposts">Log In</a>
      </p>
      <br />
      <button onClick={() => navigate('/login')}>Logout</button>
    </div>
  );
}

export default Upload;
