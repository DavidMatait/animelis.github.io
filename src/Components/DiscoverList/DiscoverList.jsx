import React, {useState, useEffect} from 'react';
import styles from './discoverlist.module.scss';
import {db, auth} from '../../firebase';
import {onAuthStateChanged} from 'firebase/auth'
import {collection, addDoc, getDocs} from "firebase/firestore";

const DiscoverList = (props) => {
const {data}=props;
const [uid, setUid]=useState('')
const [favani,setFavani]=useState('')
const [img,setImg]=useState('')
const [score,setScore]=useState('')
const [episodes, setEpisodes]=useState('')
const [synopsis, setSynopsis]=useState('')
const [url, setUrl]=useState('')

// Fetch anime once and get user
useEffect(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUid(user.uid)
    }
  });
}, [])

// Upload fav to firebase by uid
const favAnime = async (anime) => {
        setFavani(anime.title)
        setImg(anime.image_url)
        setScore(anime.score)
        setEpisodes(anime.episodes)
        setSynopsis(anime.synopsis)
        setUrl(anime.url)

      const addAnime= await addDoc(collection(db,"Users", uid,"fav"),{
        favani: anime.title,
        img: anime.image_url,
        score: anime.score,
        episodes: anime.episodes,
        synopsis: anime.synopsis,
        url: anime.url
      })
  }

  return (
    <div className={styles.grid}>
      {data.map(function(anime){  
        if(data){
        
      return <div className={styles.card}>
          <img src={anime.image_url}/>
        <div className={styles.wrap}>
          <h1>{anime.title.slice(0,40)}</h1>
          <p>Score: {anime.score}</p>
          <button onClick={()=>{favAnime(anime)}}>Add to Fav</button>
        </div>
        </div>}})}
    </div>

  )
}

export default DiscoverList;