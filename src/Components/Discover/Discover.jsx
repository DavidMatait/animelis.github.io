import React, {useState, useEffect} from 'react';
import DiscoverList from '../DiscoverList';

const Discover = () => {
// Changing variables for API data fetch  
const [search, setSearch] = useState([]);
const [data, setData]=useState([]);

// Search function
const HandleSearch= e => {
e.preventDefault();
FetchAnime(search)
}

// Fetching API data for Anime search
 const FetchAnime= async (query)=>{ 
  const temp= await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
  .then(res=>res.json())
  setData(temp.results)
}

  return (
    <div>
      <form onSubmit={HandleSearch}>
        <input 
          placeholder="Search for the anime..."
          required
          value={search}
          onChange={e=>setSearch(e.target.value)}>
        </input>
      </form>

      <div>
      <DiscoverList data={data} />
      </div>
    </div>

  )
}

export default Discover

// https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10