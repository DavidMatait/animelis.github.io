import React from 'react';
import styles from './HomeCard.module.scss';

const HomeCard = (props) => {
const {data}= props;

if(data.start_date === null){
  data.start_date="Unknown";
}

  return (
    <div className={styles.card}>
      <img src={data.image_url}/>
      <h1>{data.rank}.{data.title}</h1>
      <p>Starting: {data.start_date}</p>
    </div>
  )
}

export default HomeCard;