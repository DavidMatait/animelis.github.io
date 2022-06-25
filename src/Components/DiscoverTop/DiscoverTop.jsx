import React, {useState, useEffect} from 'react';
import styles from './discovertop.module.scss';

const DiscoverTop = (props) => {
const{top}=props;

  return (
    <div className={styles.main}>
      <h2>Most popular Anime </h2>
      {top.map(anime=>{
        return<div>
          <a href={anime.url} target="_blank">{anime.title}</a>
        </div>
      })}
    </div>
  )
}

export default DiscoverTop;