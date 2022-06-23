import React, {useState, useEffect} from 'react';

const DiscoverList = (props) => {
const {data}=props;

  return (
    <div>
      {data.map(anime=>{
        if(data){
      return <div>
        <h1>{anime.title}</h1>
        <img src={anime.image_url}/>
        <p>Episodes: {anime.episodes}</p>
        <p>Score: {anime.score}</p>
        </div>}})}
    </div>

  )
}

export default DiscoverList;