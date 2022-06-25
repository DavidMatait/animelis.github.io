import React, {useState, useEffect} from 'react';
import styles from './discoverlist.module.scss';

const DiscoverList = (props) => {
const {data}=props;

  return (
    <div className={styles.grid}>
      {data.map(anime=>{ 
        if(data){
      return <div className={styles.card}>
          <img src={anime.image_url}/>
        <div className={styles.wrap}>
          <h1>{anime.title}</h1>
          <p>Score: {anime.score}</p>
        </div>
        </div>}})}
    </div>

  )
}

export default DiscoverList;