import React, {useState, useEffect} from 'react';
import styles from './App.module.scss';
import Home from './Components/Home';
import About from './Components/About';
import Nav from './Components/Nav';
import HomeLeft from './Components/HomeLeft';
import HomeBottom from './Components/HomeBottom';
import HomeRight from './Components/HomeRight';
import MyList from './Components/MyList';
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
    setData(data.top)
    setPending(false)
    setError(null)
  })
  .catch(err=>{
    setPending(false)
    setError('Failed')
  })
// Prev does prevent data from infinite loop  
},[prev])

// BrowserRouter is used to manage the website pages effectively
return (
  <div className={styles.main}>    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Nav/>
          <div className={styles.mid}>
          <HomeLeft/>
          <Home data={data}/>
          <HomeRight/>
          </div>
        <HomeBottom/></>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/mylist" element={<MyList/>}/>
      </Routes>
    </BrowserRouter> 
  </div>
  )
}
export default App;

// research web design
// bugfix more/less button to not show on strings which meets condition
// start my list

