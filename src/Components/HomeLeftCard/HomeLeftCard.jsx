import React, {useState, useEffect} from 'react';

const HomeLeftCard = (props) => {
const {data}= props;
const [stringTr, setStringTr]=useState('');
const [prev,setPrev]=useState(0);

// Set string length limit
useEffect(()=>{
let string=data.content
const length=120;

let tr=string.length > length ? 
string.substring(0, length) + '...' :
string;

setStringTr(tr)
},[prev])

  return (
    <div>
      <h2>{data.user.username}</h2>
      <p>{stringTr}</p>
    </div>
  )
}

export default HomeLeftCard