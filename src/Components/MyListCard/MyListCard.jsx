import React, {useState, useEffect} from 'react';
import styles from './mylistcard.module.scss';
import {db} from '../../firebase';
import {doc, deleteDoc} from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const MyListCard = (props) => {
const {setAid, anime, uid}=props;

// Set length of anime array
setAid(anime.length)
anime.sort((a,b)=>{return a.aid-b.aid})

//Delete document
const deleteAnime = async (e) => {
 const delAnime=await deleteDoc(doc(db,"Users", uid,"anime",e.id))
 window.location.reload()
}

// Show no content if there is no data
if(anime.length===0){
  return <div className={styles.main}>
    <h1>My List</h1>    
    <div className={styles.rec}>
    <p className={styles.noc}>List has no Anime yet</p>
    </div></div>
}

  return (
    <div className={styles.main}> 
      <h1>My List</h1>

      <div className={styles.rec}>
      {anime.map(function(d, index){
        if(d.comment===""){
          d.comment="No Comment"
        }
      return (<div className={styles.card}>
        <h2 key={index}>{index+1}. {d.title}</h2>
          <p key={index}>Genre: {d.genre}</p>
          <p key={index}>Number of episodes: {d.numb}</p>
          <p key={index}>Comment: {d.comment}</p>
          <p key={index}>Rating: {d.rating}/10<button onClick={() => {deleteAnime(d)}}><FontAwesomeIcon icon={faTrash} /></button></p>
          
        </div>)})}

      </div>
    </div>

  )
}

export default MyListCard