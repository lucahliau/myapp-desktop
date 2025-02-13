/*working // src/Upload.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Upload() {
  // Use descriptive state variable names for clarity.
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    // Capture the first file selected.
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if an image file is selected.
    if (!image) {
      setMessage('Please select an image.');
      return;
    }

    // Create a new FormData object and append the fields.
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);

    try {
      // Get the token from localStorage.
      const token = localStorage.getItem('token');

      // Send a POST request to your backend create post endpoint.
      // Note: It's best not to manually set the Content-Type header for FormData.
      const response = await axios.post(
        'https://myapp-backend-demo-4fa256f8580e.herokuapp.com/api/posts/create',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      setMessage('Post created successfully!');
      // Clear the form fields.
      setTitle('');
      setDescription('');
      setImage(null);
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
        <div style={{ marginBottom: '10px' }}>
          <label>Post Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
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
*/ /*
// src/Upload.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Upload() {
  // State variables for each field.
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');          // New: Price field (string/number)
  const [linkUrl, setLinkUrl] = useState('');        // New: Product webpage URL
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    // Capture the first file selected.
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure an image is selected.
    if (!image) {
      setMessage('Please select an image.');
      return;
    }

    // Create a new FormData object and append all the fields.
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('linkUrl', linkUrl);

    try {
      // Get the token from localStorage.
      const token = localStorage.getItem('token');

      // Send a POST request to your backend create post endpoint.
      const response = await axios.post(
        'https://myapp-backend-demo-4fa256f8580e.herokuapp.com/api/posts/create',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
            // Note: Let axios set the Content-Type header automatically for FormData.
          }
        }
      );
      
      setMessage('Post created successfully!');
      // Clear the form fields.
      setTitle('');
      setDescription('');
      setPrice('');
      setLinkUrl('');
      setImage(null);
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
        <div style={{ marginBottom: '10px' }}>
          <label>Post Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Price ($):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
            step="0.01"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Product URL:</label>
          <input
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
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
        See your uploaded posts here <a href="/myposts">My Posts</a>
      </p>
      <br />
      <button onClick={() => navigate('/login')}>Logout</button>
    </div>
  );
}

export default Upload;
*/
// src/Upload.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Upload() {
  // State variables for each field.
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');          // New: Price field (as a string or number)
  const [linkUrl, setLinkUrl] = useState('');        // New: Product webpage URL
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    // Capture the first file selected.
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure an image is selected.
    if (!image) {
      setMessage('Please select an image.');
      return;
    }

    // Create a new FormData object and append all the fields.
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('linkUrl', linkUrl);

    try {
      // Get the token from localStorage.
      const token = localStorage.getItem('token');

      // Send a POST request to your backend create post endpoint.
      await axios.post(
        'https://myapp-backend-i5fr.onrender.com/api/posts/create',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
            // Do not manually set the Content-Type for FormData.
          }
        }
      );
      
      setMessage('Post created successfully!');
      // Clear the form fields.
      setTitle('');
      setDescription('');
      setPrice('');
      setLinkUrl('');
      setImage(null);
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
        <div style={{ marginBottom: '10px' }}>
          <label>Post Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Price ($):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
            step="0.01"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Product URL:</label>
          <input
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
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
        See your uploaded posts here <a href="/myposts">My Posts</a>
      </p>
      <br />
      <button onClick={() => navigate('/login')}>Logout</button>
    </div>
  );
}

export default Upload;
