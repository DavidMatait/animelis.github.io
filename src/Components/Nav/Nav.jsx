import React from 'react';
import style from './nav.module.scss';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={style.main}>
      <Link to="/about">About</Link>
      <Link to="/mylist">My List</Link>
      <Link to="/discover">Discover</Link>
    </div>
  )
}

export default Nav