import React, {useState, useEffect} from 'react';
import styles from './homeleftcard.module.scss';

const HomeLeftCard = (props) => {
const {data}= props;
const [stringTr, setStringTr]=useState('');
const [prev,setPrev]=useState(0);

// Set string length limit / UseEffect to prevent infinite loop
useEffect(()=>{
let string=data.content
const length=120;

let tr=string.length > length ? 
string.substring(0, length) + '...' :
string;

setStringTr(tr)
},[prev])

  return (
    <div className={styles.main}>
      <h2>{data.user.username}</h2>
      <p>{stringTr}</p>
      <a href={data.entry[0].url} target='_blank'>More info</a>
    </div>
  )
}

export default HomeLeftCard;