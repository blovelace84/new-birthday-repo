import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import './styles.css';
import mommyImage from './pictures of mom/Mommy.jpg';

// Supabase credentials
const supabaseUrl = 'https://zqvzatzhiyhxndxclnoh.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnphdHpoaXloeG5keGNsbm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNDg2MDMsImV4cCI6MjA0MzkyNDYwM30.p_QzuaBDK1253SZrPp9vJ66oN4CljWG27Jz9PuGtfrk";
const supabase = createClient(supabaseUrl, supabaseKey);

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // Fetch posts from Supabase when the page loads
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('posts').select('*');
      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
    <div className="homepage-container">
      <h1>Happy Birthday, Naomi</h1>
      <img src={mommyImage} alt='A picture of Mom' ></img>
      <p>May you enjoy your special day with love and happiness.</p>
      <p>Posts:</p>

      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.name}</h3>
            <p>{post.text}</p>
          </div>
        ))}
      </div>

      {/* Button to navigate to the PostForm page */}
      <button
        onClick={() => navigate('/posts')}
        className="navigate-button"
      >
        Create a Post
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => navigate('/bio')}
        className="navigate-button"
      >
        Bio
      </button>
      
    </div>
  );
};

export default Homepage;
