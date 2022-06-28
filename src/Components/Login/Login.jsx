import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {auth} from '../../firebase';

const Login = (props) => {

const [loginEmail, setLoginEmail]=useState("");
const [loginPassword, setLoginPassword]=useState("");
const navigate=useNavigate();
const login=async()=>{
  try{
  const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  console.log("logged in")
  navigate("/home");
  }catch(error) {
    console.log(error.message);
  }
}

  return (
    <div>
      <h1>Welcome to AnimeList!</h1>
      <h2>Login</h2>
      <p>Email</p>
      <input onChange={(e)=>setLoginEmail(e.target.value)}/>
      <p>Password</p>
      <input onChange={(e)=>setLoginPassword(e.target.value)}/>
      <button onClick={login}>Login</button>

      <p>Don't have account?</p>
      <Link to="/signin">Create account</Link>
    </div>
  )
}

export default Login