// src/MyPosts.js
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMyPosts();
  }, []);

  const fetchMyPosts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://myapp-backend-demo.herokuapp.com/api/posts/myPosts", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPosts(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch your posts.");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>My Uploaded Posts</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {posts.length === 0 ? (
        <p>You have not uploaded any posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <img src={`https://myapp-backend-demo.herokuapp.com${post.imageUrl}`} alt="Post" style={{ maxWidth: "100%" }} />
            <p>{post.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyPosts;*/
