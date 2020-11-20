import React, { useState } from 'react';

const Register = () => {
  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setRegister({...register, [e.target.id]: e.target.value})
  };

  const { firstName, lastName, email, password } = register;
  
  return (
    <>
      <h2>Register Form</h2>
      <form id='registration-form' data-ms-form="signup">
        <label 
          htmlFor='fname'
        >
          First name:
        </label>
        <input 
          type="text" 
          id="firstName"
          name="fname"
          onChange={handleChange}
          value={firstName}
          required
          data-ms-member="first-name"
        />
        <label 
          htmlFor='lname'
        >
          Last name:
        </label>
        <input 
          type="text" 
          id="lastName"
          name="lname" 
          onChange={handleChange}
          value={lastName}
          required
          data-ms-member="last-name"
        />
        <label 
          htmlFor='email'
        >
          Email:
        </label>
        <input 
          type="email" 
          id="email"
          name="email" 
          onChange={handleChange}
          value={email}
          required
          data-ms-member="email"
        />
        <label 
          htmlFor='password'
        >
          Password:
        </label>
        <input 
          type="password" 
          id="password"
          name="password" 
          onChange={handleChange}
          value={password}
          required
          data-ms-member="password"
        />
        <button 
          data-ms-membership="5fb7fa582250ca0004b336e4"
          type='submit' 
        >
          Submit Registration Information
        </button>
      </form>
    </>
  );
};

export default Register;