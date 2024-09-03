
import React from "react";
import './Register.css';

function Register() {
  return (
    <section className='container'>
      <h1 className='sectiontitle'>Create Account</h1>
      <form>
        <div className='formgroup'>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Username'
            required
            aria-label='Username'
          />
        </div>
        <div className='formgroup'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            required
            aria-label='Email'
          />
        </div>
        <div className='formgroup'>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            required
            aria-label='Password'
          />
        </div>
        <input className='hoverbtn' type='submit' value='Create Account' />
      </form>
    </section>
  );
}

export default Register;
