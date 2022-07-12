import React from 'react';
import styles from './mylistmetrics.module.scss';

const MyListMetrics = (props) => {
const {anime}=props;
let sum=0;
let time=0;
let days=0; 
let hours=0;
let min=0; 
let count=0;

// If data array is not empty, calculate:
// total episodes, time watched
if(anime.length!=0){
sum=anime.map(item => parseInt(item.numb)).reduce((prev, next) => prev + next);
time=sum*20;
days=Math.floor(time/60/24);
hours=Math.floor((time-(days*60*24))/60)
min=time-(days*60*24)-(hours*60)
count=anime.length;
}

  return (
    <div className={styles.main}>
      <h1>My Statistics</h1>
      <div className={styles.grid}>
        <p>Total episodes watched: {sum}</p>
        <p>Total time watched: {days} Days {hours} hours {min} min</p>
        <p>Total animes watched: {count}</p>
      </div>
    </div>
  )
}

export default MyListMetrics