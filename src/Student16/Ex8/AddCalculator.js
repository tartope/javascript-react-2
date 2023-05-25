import React from 'react'
import { useState } from 'react'

export const AddCalculator = () => {
    let [counter, setCounter] = useState(0);

    const handleBtns = (btn)=>{
        setCounter(counter +=btn)
    }
  return (
    <div>
        <button onClick={()=> handleBtns(1)}>Add 1</button>
        <button onClick={()=> handleBtns(2)}>Add 2</button>
        <button onClick={()=> handleBtns(3)}>Add 3</button>
        <br/>
        Total: {counter}
    </div>
  )
}
