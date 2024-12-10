import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import './styles.css';  // Import the styles.css file

// Supabase credentials
const supabaseUrl = 'https://zqvzatzhiyhxndxclnoh.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnphdHpoaXloeG5keGNsbm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNDg2MDMsImV4cCI6MjA0MzkyNDYwM30.p_QzuaBDK1253SZrPp9vJ66oN4CljWG27Jz9PuGtfrk";
const supabase = createClient(supabaseUrl, supabaseKey);

const Posts = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Insert post into Supabase
    const { data, error } = await supabase.from('posts').insert([{ name, text }]);

    if (error) {
      console.error('Error inserting post:', error);
    } else {
      console.log('Post added:', data);
      setName('');
      setText('');
    }

    setLoading(false);
    // Redirect to homepage after submitting
    navigate('/');
  };

  // Navigate back to Homepage manually
  const handleGoToHomepage = () => {
    navigate('/');
  };

  return (
    <div className="post-form-container">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder="Enter your name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="text">Post</label>
          <textarea 
            id="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            required 
            placeholder="Write your post here"
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Posting...' : 'Post'}
        </button>
      </form>

      {/* Button to navigate to Homepage manually */}
      <button onClick={handleGoToHomepage} className="navigate-button">
        Go to Homepage
      </button>
    </div>
  );
};

export default Posts;
