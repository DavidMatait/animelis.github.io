import React, {useState, useEffect} from 'react';
import styles from './mylistcard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const MyListCard = (props) => {
const {data, hook, setHook}=props;

// Hook forces component to re-render
if(!hook){
  setHook(hook)
}

  return (
    <div className={styles.main}> 
      <h1>My List</h1>
      <div className={styles.bordered}>
      <div className={styles.border}>
        <p><FontAwesomeIcon icon={faAngleUp} /></p>
      </div> 

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

        <div className={styles.border}>
        <p><FontAwesomeIcon icon={faAngleDown} /></p>
      </div>
      </div>
    </div>

  )
}

export default MyListCard