import React, { useState } from 'react';

const SignUp = () => {
  const [signup, setSignUp] = useState({
    email1: '',
    password1: ''
  });

  const handleChange = (e) => {
    setSignUp({...signup, [e.target.id]: e.target.value})
  };

  const { email, password } = signup;
  
  return (
    <>
      <h2>Sign In Form</h2>
      <form id='sign-in-form' data-ms-form="login">
        <label htmlFor='email'>
          Email:
        </label>
        <input 
          type="email" 
          id="email1"
          name="email" 
          onChange={handleChange}
          value={email}
          required
          data-ms-member="email"
        />
        <label htmlFor='password'>
          Password:
        </label>
        <input 
          type="password" 
          id="password1"
          name="password" 
          onChange={handleChange}
          value={password}
          required
          data-ms-member="password"
        />
        <button 
          type='submit' 
          data-ms-form="login"
        >
          Submit Login Information
        </button>
      </form>
      <a href='#/ms/password-reset'>Forgot Password?</a>
    </>
  );
};

export default SignUp;