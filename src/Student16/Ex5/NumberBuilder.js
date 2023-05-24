import React from 'react'
import { useState } from 'react'

export const NumberBuilder = () => {
    //create counter state to keep track of count
    let [counter, setCounter] = useState(0);
    //create numbers string state to display
    let [numberString, setNumberString] = useState("");

    const handleAdd = ()=>{
        //increments the counter
        setCounter(++counter);
        //coerces counter + numberString (this order is important)
        setNumberString(numberString + counter);
    }
    console.log("1"+2)

    const handleReset = ()=>{
        if(counter > 0){
            //reset counter to 0
            setCounter(0);
            //reset numbers to empty
            setNumberString("");
        }
    }

  return (
    <div>
        <button onClick={()=>{handleAdd()}}>Add Number</button>
        <button onClick={()=>{handleReset()}}>Reset</button>
        <br />
        Numbers: {numberString}
    </div>
  )
}
