import React from 'react';
import styles from './home.module.scss';
import HomeCard from '../HomeCard';

const Home = (props) => {
const {data}= props;

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Top upcoming anime</h1>
      <div className={styles.cards}>
        {data && data.map(data=><HomeCard data={data}/>)}
      </div>
    </div>
  )
}

export default Home