import React, {useState, useEffect} from 'react';
import styles from './mylist.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import MyListCard from '../MyListCard';
import MyListMetrics from '../MyListMetrics';
import {db, auth} from '../../firebase';
import {onAuthStateChanged} from 'firebase/auth'
import {collection, addDoc, getDocs} from "firebase/firestore";

const MyList = () => { 

const [title, setTitle]=useState('');
const [genre, setGenre]=useState('');
const [numb, setNumb]=useState('');
const [comment, setComment]=useState('');
const [rating, setRating]=useState(0);
const [aid, setAid]=useState(0);
const [uid, setUid]=useState('')
const [anime, setAnime]=useState([]);

//Handle submit function to create list card
const handleSubmit = (e) => {
  e.preventDefault()
  setTitle('');
  setGenre('')
  setNumb('')
  setComment('')
  setRating(0)
}

// Fetch anime once and get user
useEffect(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUid(user.uid)
      let getAnime = await getDocs(collection(db, "Users", user.uid, "anime"))
      setAnime(getAnime.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })))
    }
  });
}, [])

// Upload anime to firebase by uid
const createAnime = async () => {
  setAid(anime.length+1)
   const addAnime= await addDoc(collection(db,"Users", uid,"anime"),{
        title,genre,numb,comment,rating,aid
      })   
      window.location.reload()
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
      <Link to="/home"><FontAwesomeIcon icon={faHouse} /></Link>
      <h1>My List</h1>
    </div>

      <div className={styles.formlist}>
        <div className={styles.formH}>
          <h2 className={styles.h2}>Add the anime you watched:</h2> 
          <form className={styles.form} onSubmit={handleSubmit}>

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
              <input type="text" pattern="\d*" maxLength="4" value={numb} onChange={(e) => {setNumb(e.target.value)}} required/>

            <p>Comment:</p>
              <input value={comment} onChange={(e) => {setComment(e.target.value)}}/>
           
           <p>Rating:</p>
            <div className={styles.rates}>
              <button type="button" className={styles.btn} onClick={decreaseV}><FontAwesomeIcon icon={faCircleMinus} /></button>
                <h3>{rating}</h3>
              <button type="button" className={styles.btn} onClick={increaseV}><FontAwesomeIcon icon={faCirclePlus} /></button>
            </div>
            
            <div className={styles.sbmt}>
              <button type="submit" onClick={createAnime}>Add Anime</button>
            </div>
          </form>
        </div>

        <MyListCard anime={anime} uid={uid} setAid={setAid}/>
      </div>

      <MyListMetrics anime={anime}/>

    </div>
  )
}

export default MyList