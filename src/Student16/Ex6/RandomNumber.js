import React from 'react'
import { useState } from 'react'

export const RandomNumber = () => {
    let [randomNum, setRandomNum] = useState(null);

    const handleRandomNum = ()=>{
        //create random number
        randomNum = Math.floor(Math.random() * 11)
        //set state to random number
        setRandomNum(randomNum)
    }


  return (
    <div>
        Random Number: {randomNum}
        <br/>
        <br/>
        <button onClick={()=> handleRandomNum()}>Generate</button>
    </div>
  )
}
