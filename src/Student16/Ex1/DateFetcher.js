import React from 'react'
import { useState } from 'react'

export const DateFetcher = () => {
    //Set state variable (date) to "Unknown"
    const [date, setDate] = useState("Unknown");
    
    //Function to add date
    const handleClick = ()=>{
        //Use new Date() constructor and UTC string method to formate
        setDate(new Date().toUTCString());
    }

  return (
    <div>
        {/* Add function to button */}
        <button onClick={()=>{handleClick()}}>Push</button>
        {/* Add state variable to JSX */}
        UTC Date: {date}
    </div>
  )
}
