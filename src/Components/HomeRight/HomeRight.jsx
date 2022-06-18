import React from 'react';
import styles from './homeright.module.scss';
import crunchy from '../../Assets/crunchyroll.png';
import funi from '../../Assets/funimation.png';

const HomeRight = () => {
  return (
    <div className={styles.main}>
      <h1>Where you can watch Anime?</h1>
      <div>
        <img src={crunchy} alt="crunchy" />
        <a href="https://www.crunchyroll.com" target="_blank" >Crunchyroll</a>
      </div>
      <div>
        <img src={funi} alt="funi" />
        <a href="https://www.funimation.com" target="_blank" >Funimation</a>
      </div>
      


    </div>
  )
}

export default HomeRight