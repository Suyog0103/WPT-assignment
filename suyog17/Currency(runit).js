import { useState } from "react"

export default function CorrencyConverter()
{
    let [val1, setval1]=useState(0)
    let [s1, sets1]=useState(0)
    let [s2, sets2]=useState(0)
    let [value, setvalue]=useState(0)
     
    function converter(event)
    {
        if(s1==="rupees" && s2 === "rupees")
            setvalue(val1)
        else if(s1==="rupees" && s2 === "dollar")
            setvalue(val1/81)
        else if(s1==="rupees" && s2 === "euro")
            setvalue(val1/89)
        else if(s1==="dollar" && s2 === "rupees")
            setvalue(val1*81)
        else if(s1==="dollar" && s2 === "dollar")
            setvalue(val1)
        else if(s1==="dollar" && s2 === "euro")
            setvalue(val1/1.1)
        else if(s1==="euro" && s2 === "rupees")
            setvalue(val1*89)
        else if(s1==="euro" && s2 === "dollar")
            setvalue(val1*1.1)
        else if(s1==="euro" && s2 === "euro")
            setvalue(val1)
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