import React from 'react';
import styles from './about.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs} from '@fortawesome/free-brands-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
   <div className={styles.main}>
    <div className={styles.top}>
      <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
      <h1>About</h1>
    </div>
    <div className={styles.mid}>

      <div className={styles.wrap}>
        <div className={styles.par}>
          <h1>What you can find in this website?</h1>
          <p>This website/project is mere replica of what 
            original <a href="https://myanimelist.net" target="_blank">MyAnimeList</a> website
            is designed to do. This is created purely for React coding 
            practice and might be somewhat interesting to see what you can find
            here. Enjoy!
          </p>
        </div>
        <div className={styles.par}>
          <h1>What is done and used in this project?</h1>
          <p>
            This project/website includes multiple API calls and there are 2 types of it: 
            1. Calling API to display data immediately as "Upcoming Anime" cards and 
            "Recommendations from MyAnimeList users". 2. Calling API accordingly after 
            submiting the search function and returns anime by its title. Additional 
            functions include: show more/less content depending on its length, submiting 
            form of your watched anime and displaying it next to the form, showing metrics 
            of how much time, episodes and animes you have watched in total according to 
            what you have submitted.
          </p>
        </div>
        <div className={styles.par}>
          <h1>Project is created and developed by Deividas Mataitis</h1>
        </div>
      </div>

      <div className={styles.iconsec}>
        <h1>Languages and tools used for this project:</h1>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faHtml5} />
          <p>HTML5</p>
          <FontAwesomeIcon icon={faSass} />
          <p>SASS</p>
          <FontAwesomeIcon icon={faReact} />
          <p>React</p>
          <FontAwesomeIcon icon={faJs} />
          <p>JavaScript</p>
          <FontAwesomeIcon icon={faFontAwesome} />
          <p>Font Awesome</p>
          <FontAwesomeIcon icon={faGithubSquare} />
          <p>GitHub</p>
        </div>
      </div>

    </div>
   </div>
  )
}

export default About