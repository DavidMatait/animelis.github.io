import React from 'react';
import styles from './homebottom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';



const HomeBottom = () => {
  return (
    <div className={styles.main}>
      <a href='https://linkedin.com/in/deividas-mataitis-ab5778216' target='_blank'>
        <FontAwesomeIcon icon={faLinkedin}/></a>
      <a href='https://github.com/DavidMatait' target='_blank'>
        <FontAwesomeIcon icon={faGithubSquare}/></a>
    </div>
  )
}

export default HomeBottom;