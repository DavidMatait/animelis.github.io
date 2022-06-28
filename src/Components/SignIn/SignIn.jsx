import { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';
import {useNavigate} from "react-router-dom";

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
    <div>
      <h1>Create your account</h1>
      <p>Email</p>
      <input onChange={(e)=>setRegisterEmail(e.target.value)}/>
      <p>Password</p>
      <input onChange={(e)=>setRegisterPassword(e.target.value)}/>
      <button onClick={register}>Create</button>
    </div>
  )
}

export default SignIn