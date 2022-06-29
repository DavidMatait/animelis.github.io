import { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';
import {useNavigate} from "react-router-dom";
import styles from './signin.module.scss';

const SignIn = () => {
const [registerEmail, setRegisterEmail]=useState("");
const [registerPassword, setRegisterPassword]=useState("");
const navigate=useNavigate();

  const register=async()=>{
    try{
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    navigate("/home");
    }catch(error) {
      console.log(error.message);
    }
  }


  return (
    <div className={styles.main}>
      <div className={styles.signinarea}>
        <h1>Create your account</h1>
        <p>Email</p>
        <input onChange={(e)=>setRegisterEmail(e.target.value)} required/>
        <p>Password</p>
        <input type="password" onChange={(e)=>setRegisterPassword(e.target.value)} minLength="6" required/>
        <button onClick={register}>Create</button>
      </div>
    </div>
  )
}

export default SignIn