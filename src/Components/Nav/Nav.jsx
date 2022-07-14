import React from 'react';
import style from './nav.module.scss';
import { Link, useNavigate} from "react-router-dom";
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

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
        <Link to="/myfavourites">My Favourites</Link>
        <Link to="/discover">Discover</Link>
        <button className={style.signout} onClick={logout}><FontAwesomeIcon icon={faSignOut} /></button>
      </div>
  )
}

export default Nav