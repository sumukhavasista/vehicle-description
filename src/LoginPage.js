import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import 'boxicons/css/boxicons.min.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      document.body.appendChild(script);

      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
      });

      const google = window.gapi;
      google.load('auth2', async () => {
        const auth2 = google.auth2.init({
          client_id: '545800576757-7q934fah9nshi48u5h2dfjf8j5l9pkcv.apps.googleusercontent.com',
          scope: 'profile email'
        });

        const signInResult = await auth2.signIn();
        const user = signInResult.getBasicProfile();

        console.log('Signed in: ', user);
        navigate('/home');
      });
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="home">
        <img src="home.png" alt="Home" />
      </div>

      <div className="container">
        <h1>LOGIN TO YOUR ACCOUNT</h1>

        <div className="social-handles">
          <button onClick={handleGoogleSignIn}>
            <i className='bx bxl-google'></i>
            Sign in with Google
          </button>

          <button /* Add Microsoft sign-in implementation (similar to Google) */>
            <i className='bx bxl-microsoft'></i>
            Sign in with Microsoft
          </button>

          <button /* Add Apple ID sign-in implementation (refer to Apple documentation) */>
            <i className='bx bxl-apple'></i>
            Sign in with Apple ID
          </button>

          <button /* Add Facebook sign-in implementation (refer to Facebook documentation) */>
            <i className='bx bxl-facebook-circle'></i>
            Sign in with Facebook
          </button>
        </div>

        <div className="seperator">
          <div className="inline-seperator"></div>
          <p>OR</p>
          <div className="inline-seperator"></div>
        </div>

        <form>
          <label htmlFor="Email">Email:</label>
          <div className="inputs">
            <input type="email" id="mail" placeholder="Type-in your mail-id" autoComplete="off" />
            <i className='bx bx-envelope'></i>
          </div>
          <br />
          <label htmlFor="passwords">Password</label>
          <div className="p-inputs">
            <input type="password" id="pwd" placeholder="Type-in your password" />
            <i className='bx bx-key'></i>
          </div>
          <br />
          <button className="submit">SUBMIT</button>

          <div className="redirects">
            <a href="reset your password">Forgot Password?</a>
            <a href="create your account">Don't have an account here?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
