import React from 'react';
import styles from './home.module.scss';
import HomeCard from '../HomeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {
const {data}= props;

  return (
    <div className={styles.main}>
      <h1 className={styles.h}>Top upcoming anime</h1>

      <div className={styles.border}>
        <p><FontAwesomeIcon icon={faAngleUp} /></p>
      </div> 

      <div className={styles.cards}>
        {data && data.map(data=><HomeCard data={data}/>)}
      </div>

      <div className={styles.border}>
        <p><FontAwesomeIcon icon={faAngleDown} /></p>
      </div>

    </div>
  )
}

export default Home