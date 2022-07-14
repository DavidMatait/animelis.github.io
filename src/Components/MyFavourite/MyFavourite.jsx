import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {db,auth} from '../../firebase';
import {doc, deleteDoc,collection, getDocs} from "firebase/firestore";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './myfavourite.module.scss'
import {onAuthStateChanged} from 'firebase/auth'

const MyFavourite = () => {
const [uid, setUid]=useState('')
const [anime, setAnime]=useState([]);

// Fetch fav anime once and get user
useEffect(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUid(user.uid)
      let getAnime = await getDocs(collection(db, "Users", user.uid, "fav"))
      setAnime(getAnime.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })))
    }
  });
}, [])

//Delete document
const delAnime = async (e) => {
 const delAnime=await deleteDoc(doc(db,"Users", uid,"fav",e.id))
 window.location.reload()
}

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <Link to="/home"><FontAwesomeIcon icon={faHouse} /></Link>
        <h3>My Favourite Anime</h3>
      </div>
      <h2>You can add anime using Discover page</h2>

      <div className={styles.grid}>
      {anime.map(function(anime){  
        if(anime){
        
      return <div className={styles.cards}>
          <img src={anime.img}/>
        <div className={styles.wrap}>
          <h1>{anime.favani.slice(0,24)}</h1>
          <p>Score: {anime.score}</p>
          <p>Episodes: {anime.episodes}</p>
          <p>Synopsis: {anime.synopsis.slice(0,120)}...</p>
          <a href={anime.url} target="_blank">More info</a>
          <br/>
          <div className={styles.btn}>
            <button onClick={()=>{delAnime(anime)}}><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>
        </div>}})}
    </div>

    </div>
  )
}

export default MyFavourite