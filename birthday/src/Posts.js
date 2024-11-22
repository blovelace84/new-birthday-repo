import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://zqvzatzhiyhxndxclnoh.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnphdHpoaXloeG5keGNsbm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNDg2MDMsImV4cCI6MjA0MzkyNDYwM30.p_QzuaBDK1253SZrPp9vJ66oN4CljWG27Jz9PuGtfrk";
const supabase = createClient(supabaseUrl, supabaseKey);




const Homepage = () => {
    const [data, setData] = useState([]); // State to store fetched users
    const [loading, setLoading] = useState(true); // State for loading indicator
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: users, error } = await supabase.from('users').select('*'); // Replace 'users' with your table name
          if (error) {
            console.error('Error fetching data:', error);
          } else {
            setData(users); // Update state with fetched data
          }
        } catch (error) {
          console.error('Unexpected error:', error);
        } finally {
          setLoading(false); // Stop loading
        }
      };
    
      fetchData();
    }, []);
    
  
    return (
      <div>
        <h1>Posts</h1>
        {loading ? (
          <p>Loading...</p> // Show loading indicator while fetching
        ) : data.length > 0 ? (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.name} {user.post}</li> // Adjust `user.name` based on your column name
            ))}
          </ul>
        ) : (
          <p>No users found.</p> // Show message if no data is found
        )}
      </div>
    );
  };