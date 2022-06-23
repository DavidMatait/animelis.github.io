import React from 'react';
import styles from './home.module.scss';
import HomeCard from '../HomeCard';
import crunchy from '../../Assets/crunchyroll.png';
import funi from '../../Assets/funimation.png';


const Home = (props) => {
const {data}= props; 
 
  return (
    <div className={styles.main}>
      <h1 className={styles.h}>Top upcoming anime</h1>

      <div className={styles.cards}>
        {data && data.map(data=><HomeCard data={data}/>)}
      </div>

    <div className={styles.ads}>
      <h1>Where you can watch Anime?</h1>

      <div className={styles.wrap}>
        <div>
          <img src={crunchy} alt="crunchy" />
          <a href="https://www.crunchyroll.com" target="_blank" >Crunchyroll</a>
        </div>
        <div>
          <img src={funi} alt="funi" />
          <a href="https://www.funimation.com" target="_blank" >Funimation</a>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home