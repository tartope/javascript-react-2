import React from 'react'
import { useState } from 'react'

export const UpDownCounter = () => {
    let [counter, setCounter] = useState(0);

    const handleClick = (direction)=>{
        // direction === "Up" ? setCounter(++counter) : setCounter(--counter);
      if(direction === "Up"){
        setCounter(++counter);
      }else{
        setCounter(--counter);
      }
    }

  return (
    <div>
        <button onClick={()=>{handleClick("Down")}}>Down</button>
        {counter}
        <button onClick={()=>{handleClick("Up")}}>Up</button>
    </div>
  )
}
