import React, {useState, useEffect} from 'react';
import styles from './HomeCard.module.scss';

const HomeCard = (props) => {
const {data}= props;
const [stringTr, setStringTr]=useState('');
const [prev,setPrev]=useState(0);

if(data.start_date === null){
  data.start_date="Unknown";  
}

// Set string length limit / UseEffect to prevent infinite loop
useEffect(()=>{
  let string=data.title
  const length=22;
  
  let tr=string.length > length ? 
  string.substring(0, length) + '...' :
  string;
  
  setStringTr(tr)
  },[prev])

  return (
    <div className={styles.card}>
      <img src={data.image_url}/>
      <div className={styles.wrap}>
        <a href={data.url} target="_blank">{data.rank}.{stringTr}</a>
        <p>Starting: {data.start_date}</p>
      </div>
    </div>
  )
}
 
export default HomeCard;