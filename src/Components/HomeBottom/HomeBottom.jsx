import React from 'react';
import styles from './homebottom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';



const HomeBottom = () => {
  return (
    <div className={styles.main}>
      <p><FontAwesomeIcon icon={faLinkedin} /></p>
      <p><FontAwesomeIcon icon={faGithubSquare}/></p>
    </div>
  )
}

export default HomeBottom;