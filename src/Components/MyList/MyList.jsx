import React from 'react'
import styles from './mylist.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const MyList = () => {
  return (
    <div className={styles.main}>
    <div className={styles.top}>
      <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
      <h1>My List</h1>
    </div>
    <h2>Add the anime you watched:</h2>
    <p>Title:</p>
    <input></input>
    <p>Genre:</p>
    <select>
      <option value="Adventure">Adventure</option>
      <option value="Action">Action</option>
      <option value="Comedy">Comedy</option>
      <option value="Slice of Life">Slice of Life</option>
      <option value="Drama"> Drama</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Supernatural">Supernatural</option>
      <option value="Magic">Magic</option>
      <option value="Mystery">Mystery</option>
      <option value="Horror">Horror</option>
      <option value="Psychological">Psychological</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Romance">Romance</option>
    </select>
    <p>Number of episodes:</p>
    <input type="number"></input>
    <p>Comment:</p>
    <input></input>
    <button>Submit</button>
    </div>
  )
}

export default MyList