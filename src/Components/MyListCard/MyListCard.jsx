import React, {useState, useEffect} from 'react';
import styles from './mylistcard.module.scss';

const MyListCard = (props) => {
const {data, hook, setHook}=props;

// Hook forces component to re-render
if(!hook){
  setHook(hook)
}

  return (
    <div>
      <h1>My List</h1>
      {data.map(function(d, idx){
        if(d.comment===""){
          d.comment="No Comment"
        }

      return (<div>
        <h2 key={idx}>{idx+1}. {d.title}</h2>
        <p key={idx}>Genre: {d.genre}</p>
        <p key={idx}>Number of episodes: {d.numb}</p>
        <p key={idx}>Comment: {d.comment}</p>
        <p key={idx}>Rating: {d.rating}/10</p>
        </div>)})}

    </div>

  )
}

export default MyListCard