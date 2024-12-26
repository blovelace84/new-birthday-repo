import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

function Register({ supabase }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleSignUp = async (e) => {
    e.preventDefault();

    //Hash the given password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Insert into users table
    const {data, error} = await supabase.from('users').insert([
        { email: email, password: hashedPassword, name: name,}
      ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Sign up successful!');
      navigate('/login');
    }

    // Clear form fields
    setEmail('');
    setPassword('');
    setName('');
  };




  
  return (
    <div className="App">
      <h1>Signup Form</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      <div>
        <p>If you have already signed up, login here!</p>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    </div>
  
  );
}

export default Register;
