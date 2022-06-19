import React, {useState, useEffect, useCallback} from 'react';
import styles from './homeleftcard.module.scss';

const HomeLeftCard = (props) => {
const {data}= props;
const [stringTr, setStringTr]=useState('');
const [prev,setPrev]=useState(0);
const [showMore, setShowMore] = useState(false);
let string=data.content;

  return (
    <div className={styles.main}>
      <h2>{data.user.username}</h2>
      <p>{showMore ? string : `${string.substring(0, 120)}...`}
      <button className={styles.btn} onClick={() => setShowMore(!showMore)}> {showMore ? "Show less" : "Show more"}</button>
      </p>
      <a href={data.entry[0].url} target='_blank'>More info at MyAnimeList</a>
    </div>
  )
}

export default HomeLeftCard;