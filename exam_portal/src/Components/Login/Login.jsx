import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform any login validation logic here

    // If login is successful, navigate to the desired page
    navigate("/dashboard");
  };

  return (
    <section id='login' className='container'>
      <h1 className='sectiontitle'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='formgroup'>
          <input
            type='text'
            name='userid'
            id='userid'
            placeholder='UserId'
            required
            aria-label='UserID'
          />
        </div>
        <div className='formgroup'>
          <div className='password-wrapper'>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              id='password'
              placeholder='Password'
              required
              aria-label='Password'
            />
            <button
              type='button'
              className='eye-button'
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {/* Add icon for the eye button here */}
            </button>
          </div>
        </div>
        <input className='hoverbtn' type='submit' value='Login' />
      </form>
      <span>
        <a href='#forget-password'>Forgot Password?</a>
      </span>
      <span>
        Don't have an account?{" "}
        <u>
          <a href='/create-account'>Create new</a>
        </u>
      </span>
    </section>
  );
}

export default Login;
