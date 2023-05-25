import React from 'react'
import { useState } from 'react'

export const CarCounter = () => {
    let [ford, setFord] = useState(0);
    let [toyota, setToyota] = useState(0);
    let [chevy, setChevy] = useState(0);
    let [total, setTotal] = useState(0);

    const handleCount = (car)=>{
        // if(car === "ford"){
        //     setFord(++ford);
        //     setTotal(total += ford);
        // }else if(car ==="toyota"){
        //     setToyota(++toyota);
        //     setTotal(total += toyota);
        // }else{
        //     setChevy(++chevy);
        //     setTotal(total += chevy);
        // }

        switch (car){
            case 'ford':
                setFord(++ford);
                setTotal(total += ford);
                break;
            case 'toyota':
                setToyota(++toyota);
                setTotal(total += toyota);
                break;
            default:
                setChevy(++chevy);
                setTotal(total += chevy);
        }
    }

  return (
    <div>
        <button onClick={()=> handleCount("ford")}>Ford</button>
        <button onClick={()=> handleCount("toyota")}>Toyota</button>
        <button onClick={()=> handleCount("chevy")}>Chevy</button>
        <br/>
        <p>Ford: {ford}</p>
        <p>Toyota: {toyota}</p>
        <p>Chevy: {chevy}</p>
        <p>Total: {total}</p>
    </div>
  )
}
