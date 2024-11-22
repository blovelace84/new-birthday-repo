import React ,{ useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';


  // Initialize Supabase client
  const supabaseUrl = 'https://zqvzatzhiyhxndxclnoh.supabase.co';
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnphdHpoaXloeG5keGNsbm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNDg2MDMsImV4cCI6MjA0MzkyNDYwM30.p_QzuaBDK1253SZrPp9vJ66oN4CljWG27Jz9PuGtfrk";
  const supabase = createClient(supabaseUrl, supabaseKey);


function Homepage(){
  const[post, setPost] = useState('');

  const navigate = useNavigate();


  const getUser = async () => {
    const user = supabase.auth.getUser();
    if (user) {
      console.log(user)
      return user;
    } else {
      console.error("User is not logged in");
    }
  };

  const handlePost = async (e) =>{ 
    e.preventDefault();
  const user = await getUser();  // Get the logged-in user
  if(user){
  const{data, error} = await supabase.from('users')
  .insert([{post: post}]);
  

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Post added successfully:', data);
    setPost(''); // Optionally reset the input field after submission
  }
  setPost('');
  }
  }


  return(
    <div className="Homepage">
        <h1>Say Happy Birthday!</h1>
        <form onSubmit={handlePost}>
          <label>
            Post
            <input
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
         
    </form>
    
    <button onClick={() => navigate('/post')}>Go to Post Page</button>
    </div>
  
  
  
  );
}

export default Homepage;
