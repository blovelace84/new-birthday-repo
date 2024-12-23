import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import Homepage from './Homepage'; // Import Homepage component
import Bio from './Bio';
import './App.css';
import Video from './Video';
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
          <Route path="/bio" element={<Bio name="Naomi Lovelace" imageUrl={("./pictures of mom/Mommy.jpg")} alt="A picture of Mommy" />} />  {/* Add a route for posts */}
          <Route path='/videoplayer' element={<Video src={"Birthday Video/Birthday-video.mp4"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
