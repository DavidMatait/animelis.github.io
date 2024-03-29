import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import {auth} from '../../firebase';
import styles from './login.module.scss'; 

const Login = (props) => {
const {setEmail}=props
const [loginEmail, setLoginEmail]=useState("");
const [loginPassword, setLoginPassword]=useState("");
const [msg, setMsg]=useState("")

const navigate=useNavigate();
const login=async()=>{
  try{
  const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  console.log("logged in")
  setEmail(loginEmail)
  navigate("/home");
  }catch(error) {
    
// Show what is wrong while loging in
  if(error.message==="Firebase: Error (auth/wrong-password)."){
  setMsg("Password is incorrect")
  }else if(error.message==="Firebase: Error (auth/user-not-found)."){
  setMsg("The email is not correct")
  }
  }
}

  return (
    <div className={styles.main}>
      <h1>Welcome to AnimeList!</h1>
      <div className={styles.logarea}>
        
        <h2>Login</h2>
        <p className={styles.err}>{msg}</p>
        <p>Email</p>
        <input onChange={(e)=>setLoginEmail(e.target.value)} required/>
        <p>Password</p>
        <input type="password" onChange={(e)=>setLoginPassword(e.target.value)} minLength="6" required/>
        <button onClick={login}>Login</button>
      
        <p className={styles.question}>Don't have an account?</p>
        <Link to="/signin">Create account</Link>
      </div>
    </div>
  )
}

export default Login