import React, {useState, useEffect} from 'react';
import DiscoverList from '../DiscoverList';
import DiscoverTop from '../DiscoverTop';
import styles from './discover.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Discover = () => {
// Changing variables for API data fetch  
const [search, setSearch] = useState([]);
const [data, setData]=useState([]);
const [top, setTop]=useState([]);
const [ispending, setPending] = useState(true);
const [error, setError]=useState(null);
const [prev,setPrev]=useState(0);

// Search function and API attachement towards the search
const HandleSearch= e => {
e.preventDefault();
FetchAnime(search)
} 

// Fetching API data for Anime search
 const FetchAnime= async (query)=>{ 
  const getAnime= await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
  .then(res=>res.json())
  console.log(getAnime.results);
  setData(getAnime.results)
}

// Fetch API of top anime bu popularity
useEffect(()=>{
  fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
  .then(res=>{
    if(!res.ok){
      alert('no data found')
    }
    return res.json()
  })
  .then((data)=>{
    setTop(data.top.slice(0,10))
    setPending(false)
    setError(null)
  })
  .catch(err=>{
    setPending(false)
    setError('Failed')
  })
},[prev])

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
        <h1>Discover</h1>
      </div>

      <div className={styles.wrapmid}>

        <div className={styles.topanime}>
          <DiscoverTop top={top}/>
        </div>

        <div className={styles.searchanime}>
            <form onSubmit={HandleSearch}>
              <input 
                placeholder="Search for the anime..."
                required
                value={search}
                onChange={e=>setSearch(e.target.value)}>
              </input>
            </form>

            <div className={styles.searchresults}>
              <DiscoverList data={data} />
            </div>

        </div>

      </div>
    </div>

  )
}

export default Discover;
