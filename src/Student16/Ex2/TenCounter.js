import React from 'react'
import { useState } from 'react'

export const TenCounter = () => {
    let [count, setCount] = useState(0);

    const handleCount = ()=>{
        setCount(++count);
        if(count === 11){
            setCount(0);
        }
    }

  return (
    <div>
        <button onClick={()=>{handleCount()}}>Push</button>
        Counter: {count}
    </div>
  )
}
