import { useState } from "react"
import Child from "./Child"


export default function Parent()
{
    let [val1, setval1]=useState(0)
    let [val2, setval2]=useState(0)
    let [val3, setval3]=useState(0)

    function Akshat(n)
    {
        setval3(n)
    }

    return <div align="center">
        <p> First num:<input type="text" onBlur={(event)=>{setval1(event.target.value)}}></input></p>
        <p>Second num:<input type="text" onBlur={(event)=>{setval2(event.target.value)}}></input></p>
        <Child funk={Akshat} val1={parseInt(val1)} val2={parseInt(val2)}></Child>
        <p>Answer is {val3}</p>
    </div>
}
