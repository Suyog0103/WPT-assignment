import { useState } from "react"

export default function CorrencyConverter()
{
    let [val1, setval1]=useState(0)
    let [s1, sets1]=useState(0)
    let [s2, sets2]=useState(0)
    let [value, setvalue]=useState(0)
     
    function converter(event)
    {
        if()
    }
    return<div>
        
        Number: <input type="number" onBlur={(event)=>{setval1(event.target.value)}}></input>
        
        From: <select onClick={(event)=>{sets1(event.target.value)}}>
            <option value= "rupees">Rupees</option>
            <option value= "dollar">Dollar</option>
            <option value= "euro">Euro</option>
        
        </select>
        To: <select onClick={(event)=>{sets2(event.target.value)}}>
            <option value= "rupees">Rupees</option>
            <option value= "dollar">Dollar</option>
            <option value= "euro">Euro</option>
        </select>
        < button onClick={converter}>Convert</button>
        <p>{value}</p>

    </div>
}