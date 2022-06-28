import React from 'react';
import style from './nav.module.scss';
import { Link, useNavigate} from "react-router-dom";
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase';

const Nav = () => {
const navigate=useNavigate();
const logout=async()=>{
  await signOut(auth);
  navigate("/");
  console.log("logged out")
}

  return (
    <div className={style.main}>
      <div className={style.typewriting}>
        <p>Welcome to Anime List </p>
      </div>
        <Link to="/about">About</Link>
        <Link to="/mylist">My List</Link>
        <Link to="/discover">Discover</Link>
        <button onClick={logout}>Sign out</button>
      </div>
  )
}

export default Nav