import React, { useState } from 'react';
import bcrypt from 'bcryptjs';  // Ensure you have bcrypt installed
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

// Initialize Supabase client
const supabaseUrl = 'https://zqvzatzhiyhxndxclnoh.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnphdHpoaXloeG5keGNsbm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNDg2MDMsImV4cCI6MjA0MzkyNDYwM30.p_QzuaBDK1253SZrPp9vJ66oN4CljWG27Jz9PuGtfrk";
const supabase = createClient(supabaseUrl, supabaseKey);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  // Handle Login Logic
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Fetch the user's hashed password from the database
    const { data: user, error } = await supabase
      .from('users')
      .select('password')
      .eq('email', email)
      .single(); // Ensure only one user is returned (or none)

    if (error) {
      console.error('Error fetching user:', error.message);
      setErrorMessage('User not found or error retrieving data.');
      return;
    }

    // Compare the provided password with the stored hashed password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (isValidPassword) {
      console.log('Login successful!');
      setIsLoggedIn(true); // Set login status
      setErrorMessage('');  // Clear any previous error messages
      navigate('/Homepage');
    } else {
      console.error('Invalid email or password');
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      {isLoggedIn ? (
        <div>
          <h2>Welcome back!</h2>
          <p>You are successfully logged in.</p>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default Login;

  