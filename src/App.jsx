import React, {useState, useEffect} from 'react';
import styles from './App.module.scss';
import Home from './Components/Home';
import About from './Components/About';
import Nav from './Components/Nav';
import HomeLeft from './Components/HomeLeft';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
// Changing variables for API data fetch  
const [ispending, setPending] = useState(true);
const [error, setError]=useState(null);
const [data, setData]=useState('');
const [prev,setPrev]=useState(0);

// Fetching API data of Top Upcoming Anime
useEffect(()=>{
  fetch("https://api.jikan.moe/v3/top/anime/1/upcoming")
  .then(res=>{
    if(!res.ok){
      alert('no data found')
    }
    return res.json()
  })
  .then((data)=>{
    setData(data.top.slice(0,10))
    setPending(false)
    setError(null)
  })
  .catch(err=>{
    setPending(false)
    setError('Failed')
  })
// Prev does prevent data from infinite loop  
},[prev])

// // if(mag){
// //  setRec(mag.data.map(mag=>mag).slice(0,10))
// // }

// console.log(rec)

// BrowserRouter is used to manage the website pages effectively
return (
  <div className={styles.main}>    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Nav/>
        <div className={styles.mid}>
        <HomeLeft/>
          <Home data={data}/>
        </div></>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter> 
  </div>
  )
}
export default App;

