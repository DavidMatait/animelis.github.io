import React, {useState} from 'react';
import styles from './mylist.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import MyListCard from '../MyListCard';
import MyListMetrics from '../MyListMetrics';

const MyList = () => {

const [title, setTitle]=useState('');
const [genre, setGenre]=useState('');
const [numb, setNumb]=useState('');
const [comment, setComment]=useState('');
const [rating, setRating]=useState(0);
const [hook, setHook]=useState(true);
const [data, setData]=useState([]);

//Handle submit function to create list card
const handleSubmit = (e) => {
  e.preventDefault()
  let newCard = {title:title,genre:genre,numb:numb,comment:comment,rating:rating}
  data.push(newCard)
  setHook(!hook)
  setTitle('');
  setGenre('')
  setNumb('')
  setComment('')
  setRating(0)
}

//Set rating out of 10
//Increase rating value
const increaseV=()=>{
  if(rating<10){
    setRating(rating+1)
  }else if(rating>=10){
    setRating(10)
  }
}
//Decrease rating value
const decreaseV=()=>{
  if(rating>0){
    setRating(rating-1)
  }else if(rating<=0){
    setRating(0)
  }
}

  return (
    <div className={styles.main}>

    <div className={styles.top}>
      <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
      <h1>My List</h1>
    </div>

      <h2>Add the anime you watched:</h2>

      <form onSubmit={handleSubmit}>

      <p>Title:</p>
      <input value={title} onChange={(e) => {setTitle(e.target.value)}} required/>

      <p>Genre:</p>
      <select value={genre} onChange={(e) => {setGenre(e.target.value)}} required>
        <option value="">Choose below</option>
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
      <input type="text" pattern="\d*" maxlength="4" value={numb} onChange={(e) => {setNumb(e.target.value)}} required/>

      <p>Comment:</p>
      <input value={comment} onChange={(e) => {setComment(e.target.value)}}/>

      <p>Rating:</p>
      <button type="button" onClick={increaseV}>+</button>
      <h3>{rating}</h3>
      <button type="button" onClick={decreaseV}>-</button>

      <button type="submit">Submit</button>
      </form>

      <MyListCard data={data} hook={hook} setHook={setHook}/>

      <MyListMetrics data={data} hook={hook} setHook={setHook}/>

    </div>
  )
}

export default MyList