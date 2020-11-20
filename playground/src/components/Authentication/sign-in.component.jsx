import React, { useState } from 'react';

const SignUp = () => {
  const [signup, setSignUp] = useState({
    email1: '',
    password1: ''
  });

  const handleChange = (e) => {
    setSignUp({...signup, [e.target.id]: e.target.value})
  };

  const handleClick = (e) => {
    localStorage.setItem('loggedInAs', email1);
  };

  const { email1, password1 } = signup;
  
  return (
    <>
      <h2>Sign In Form</h2>
      <form id='sign-in-form' data-ms-form="login" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='email'>
          Email:
        </label>
        <input 
          type="email" 
          id="email1"
          name="email" 
          onChange={handleChange}
          value={email1}
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
          value={password1}
          required
          data-ms-member="password"
        />
        <button 
          type='submit' 
          data-ms-form="login"
          onClick={handleClick}
        >
          Submit Login Information
        </button>
      </form>
      <a href='#/ms/password-reset'>Forgot Password?</a>
    </>
  );
};

export default SignUp;