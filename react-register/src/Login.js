import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import image from '../src/image/ensar.png';
import "./forms.css";
import {
  signInWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "./AuthContext";
import loginWithFacebook from "./FacebookButton";
// import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();
 
  

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        } else {
          navigate("/");
        }
      })
      .catch((err) => setError(err.message));
  };
 


  return (
    
    <div className="center">
      <img src={image} alt="ensar.png"  className="image"/>
      <div className="auth">
        <h1>Log In To Your Account</h1>
        {error && <div className="auth__error">{error}</div>}
        <form onSubmit={login} name="login_form">
          <input
            type="email"
            value={email}
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />

          <input
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
          <button type="submit">Login</button>
          </form>
        <p>
        <p10>
        <input className="checkbox" type="checkbox" />
         Remember Me
         </p10>
          <Link to="/forgot-password">Forgot Password?</Link>
        
        </p>
        <p1>------------instant Login------------</p1>
        <div className="google">
        <Link to="/Google">
  <button
    type="submit"
  
    style={{ backgroundColor: 'red', color: '#fff', border: 'none', padding: '10px 20px', transition: 'background-color 0.3s ease' }}
    onMouseOver={(e) => e.target.style.backgroundColor = 'blue'}
    onMouseOut={(e) => e.target.style.backgroundColor = 'red'}
  >

    Continue With Google
  </button>
  </Link>
</div>
        <div className="facebook">
        <Link to="/facebook-button">
  <button
    type="submit"
    style={{ backgroundColor: 'skyblue', color: '#fff', border: 'none', padding: '10px 20px', transition: 'background-color 0.3s ease' }}
    onMouseOver={(e) => e.target.style.backgroundColor = 'blue'}
    onMouseOut={(e) => e.target.style.backgroundColor = 'skyblue'}
  >
    Continue With facebook
  </button>
  </Link>
  {/* <button onClick={loginWithFacebook}>Continue with Facebook</button> */}

</div>
       {/* <form action="/Microsoft">
          <button type="submit" class="jashu">
            <span class="icon">&#xE7B8;</span>
            Login with Microsoft
          </button>
        </form> */}
      </div>
      </div>
  );
}

export default Login;
