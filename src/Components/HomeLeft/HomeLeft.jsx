import React, {useState, useEffect} from 'react';
import styles from './homeleft.module.scss';
import HomeLeftCard from '../HomeLeftCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const HomeLeft = () => {
const [ispending, setPending] = useState(true);
const [error, setError]=useState(null);
const [data, setData]=useState('');
const [prev,setPrev]=useState(0);

// Fetching API data of Anime recomendations 
useEffect(()=>{
  fetch("https://api.jikan.moe/v4/recommendations/anime")
  .then(res=>{
    if(!res.ok){
      alert('no data found')
    }
    return res.json()
  })
  .then((data)=>{
    setData(data.data)
    setPending(false)
    setError(null)
  })
  .catch(err=>{
    setPending(false)
    setError('Failed')
  })
// Prev does prevent data from infinite loop  
},[prev])

  return (
    <div className={styles.main}>      
    <h1>Recomendations from the MyAnimeList users</h1>

      <div className={styles.border}>
        <p><FontAwesomeIcon icon={faAngleUp} /></p>
      </div> 

      <div className={styles.rec}>
        {data && data.map(data=><HomeLeftCard data={data}/>)}
      </div>

      <div className={styles.border}>
        <p><FontAwesomeIcon icon={faAngleDown} /></p>
      </div>
    </div>
  )
}

export default HomeLeft;