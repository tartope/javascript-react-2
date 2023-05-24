import React from 'react'
import { useState } from 'react'

export const MinMaxCounter = () => {
    let [counter, setCounter] = useState(0);
    //create variables for min value
    let [min, setMin] = useState(0);
    //create variables for max value
    let [max, setMax] = useState(0);

    const handleClick = (direction)=>{
      if(direction === "Up"){
        setCounter(++counter);
        //if counter >= max, then set the counter as the max
        if(counter >= max){
            setMax(counter);
        }
      }else{
        setCounter(--counter);
        //if counter <= min, then set the counter as the min
        if(counter <= min){
            setMin(counter);
        }
      }

      
    }

  return (
    <div>
        <button onClick={()=>{handleClick("Down")}}>Down</button>
        {counter}
        <button onClick={()=>{handleClick("Up")}}>Up</button>
        <p>Min: {min}</p>
        <p>Max: {max}</p>
    </div>
  )
}

