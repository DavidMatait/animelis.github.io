import React, {useState, useEffect} from 'react';
import styles from './mylistcard.module.scss';

const MyListCard = (props) => {
const {data, hook, setHook}=props;

// Hook forces component to re-render
if(!hook){
  setHook(hook) 
}

// Show no content if there is no data
if(data.length===0){
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
      {data.map(function(d, idx){
        if(d.comment===""){
          d.comment="No Comment"
        }

      return (<div className={styles.card}>
        <h2 key={idx}>{idx+1}. {d.title}</h2>
          <p key={idx}>Genre: {d.genre}</p>
          <p key={idx}>Number of episodes: {d.numb}</p>
          <p key={idx}>Comment: {d.comment}</p>
          <p key={idx}>Rating: {d.rating}/10</p>
        </div>)})}

      </div>
    </div>

  )
}

export default MyListCard