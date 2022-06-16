import React, {useState, useEffect} from 'react';
import styles from './homeleft.module.scss';
import HomeLeftCard from '../HomeLeftCard';


const HomeLeft = () => {
const [ispending, setPending] = useState(true);
const [error, setError]=useState(null);
const [data, setData]=useState('');
const [prev,setPrev]=useState(0);
// Fetching API data of Top Upcoming Anime
useEffect(()=>{
  fetch("https://api.jikan.moe/v4/recommendations/anime")
  .then(res=>{
    if(!res.ok){
      alert('no data found')
    }
    return res.json()
  })
  .then((data)=>{
    setData(data.data.slice(0,10))
    setPending(false)
    setError(null)
  })
  .catch(err=>{
    setPending(false)
    setError('Failed')
  })
// Prev does prevent data from infinite loop  
},[prev])

console.log(data)





  return (
    <div className={styles.main}>
      <h1>Recomendations from the MyAnimeList users</h1>
      <HomeLeftCard/>
    </div>
  )
}

export default HomeLeft;