import React from 'react';

const MyListMetrics = (props) => {
const {data, hook, setHook}=props;


// Hook forces component to re-render
if(!hook){
  setHook(hook)
}
let sum=0;

if(data.length!=0){
sum=data.map(item => parseInt(item.numb)).reduce((prev, next) => prev + next);
}

  return (
    <div>
      <h1>My Statistics</h1>
      <h2>Total episodes watched: {sum}</h2>
    

    </div>
  )
}

export default MyListMetrics