import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './Posts.js';
import Homepage from './Homepage.js'; // Import Homepage component
import Bio from './Bio.js';
import Video from './Video.js'
import './App.css';

import { createClient } from '@supabase/supabase-js';


// Supabase credentials
const supabaseUrl = 'https://zqvzatzhiyhxndxclnoh.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnphdHpoaXloeG5keGNsbm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNDg2MDMsImV4cCI6MjA0MzkyNDYwM30.p_QzuaBDK1253SZrPp9vJ66oN4CljWG27Jz9PuGtfrk";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Change default route to Homepage */}
          <Route path="/" element={<Homepage supabase={supabase}  />} />  {/* Default route */}
          <Route path="/posts" element={<Posts />} />  {/* Add a route for posts */}
          <Route path="/bio" element={<Bio name="Naomi Lovelace" imageUrl={("birthday/src/pictures of mom/Mommy.jpg")} alt="A picture of Mommy" />} />  {/* Add a route for posts */}
          <Route path="/video" element={<Video src="birthday/src/Video/Naomi Lovelace Birthday Video.mp4" />} />  {/* Add a route for posts */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
