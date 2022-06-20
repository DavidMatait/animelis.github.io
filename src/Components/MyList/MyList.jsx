import React, {useState, useEffect} from 'react';
import styles from './mylist.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import MyListCard from '../MyListCard';
// import {db} from '../../firebase';
// import {collection, addDoc, Timestamp} from 'firebase/firestore';

const MyList = () => {

const [title, setTitle]=useState('');
const [genre, setGenre]=useState('');
const [numb, setNumb]=useState('');
const [comment, setComment]=useState('');
const [hook, setHook]=useState(true);
const [data, setData]=useState([]);

//Handle submit function to create list card
const handleSubmit = (e, index) => {
  e.preventDefault()
  let newCard = {title:title,genre:genre,numb:numb,comment:comment}
  data.push(newCard)
  setHook(!hook)
}

  return (
    <div className={styles.main}>

    <div className={styles.top}>
      <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
      <h1>My List</h1>
    </div>

      <h2>Add the anime you watched:</h2>

      <p>Title:</p>
     <input value={title} onChange={(e) => {setTitle(e.target.value)}}/>
     <p>Genre:</p>
     <select value={genre} onChange={(e) => {setGenre(e.target.value)}}>
      <option value="choose">Choose below</option>
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
      <input type="number" value={numb} onChange={(e) => {setNumb(e.target.value)}}/>
      <p>Comment:</p>
      <input value={comment} onChange={(e) => {setComment(e.target.value)}}/>
      <button onClick={handleSubmit}>Submit</button>

      <MyListCard data={data} hook={hook} setHook={setHook}/>

    </div>
  )
}

export default MyList