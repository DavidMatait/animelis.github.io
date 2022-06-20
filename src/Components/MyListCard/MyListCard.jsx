import React, {useState, useEffect} from 'react';
import styles from './mylistcard.module.scss';

const MyListCard = (props) => {
const {data, hook, setHook}=props;

console.log(data)

if(!hook){
  setHook(hook)
}


  return (
    <div>
      <p>hello</p>
      {data.map(function(d, idx){
      return (<div>
        <p key={idx}>Title: {d.title}</p>
        <p key={idx}>Genre: {d.genre}</p>
        <p key={idx}>Number of episodes: {d.numb}</p>
        <p key={idx}>Comment: {d.comment}</p>
        </div>)})}

    </div>

  )
}

export default MyListCard