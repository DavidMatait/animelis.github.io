import React from 'react';
import styles from './about.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
   <div className={styles.main}>
    <div className={styles.top}>
      <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
      <h1>About</h1>
    </div>
    <div className={styles.mid}>
      <h1>What you can find in this website?</h1>
      <p>This website/project is mere replica of what 
        original <a href="https://myanimelist.net" target="_blank">MyAnimeList</a> website
        is designed to do. This is created purely for React coding 
        practice and might be somewhat interesting to see what you can find
        here. Enjoy!
      </p>
      <h1>What coding this website includes?</h1>
      <p>
        This website is made using JavaScript and SCSS in the React. 
        Additionally, API calls, fontawesome and routing system are 
        integrated.
      </p>
    </div>
   </div>
  )
}

export default About