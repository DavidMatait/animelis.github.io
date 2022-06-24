import React, {useState, useEffect, useCallback} from 'react';
import styles from './homeleftcard.module.scss';

const HomeLeftCard = (props) => {
const {data}= props;
const [showMore, setShowMore] = useState(false);
const [toggle,setToggle]=useState(false)
let string=data.content;

useEffect(()=>{
if(string.length<=120){
  setToggle(true)
}else{
  setToggle(false)
}
},[])

  return (
    <div className={styles.main}>
      <h2>{data.user.username}</h2>
      <p>{showMore ? string : `${string.substring(0, 120)} `}
      {toggle ? "" : <button className={styles.btn} onClick={() => setShowMore(!showMore)}> {showMore ? "Show less" : "Show more"}</button>}
      </p>
      <a href={data.entry[0].url} target='_blank'>More info at MyAnimeList</a>
    </div>
  )
}

export default HomeLeftCard;