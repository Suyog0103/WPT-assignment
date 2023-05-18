import { useState} from "react"
import Graduate from "./Graduate"
import Pg from "./Pg"
import Undergraduate from "./Undergraduate"

export default function Login()
{
    let [header, setheader]=useState()
    function Qualification(event)
    {
        setheader(event.target.value) 
    }

    return<div>
        <p>Name: <input type="text" ></input></p>
        <p>Email: <input type="text" ></input></p>
        <select onClick={Qualification}>
            <option value="Graduate">Graduate</option>
            <option value="Pg">Pg</option>
            <option value="Undergraduate">Undergraduate</option>
        </select>
        {header==="Graduate"?<Graduate></Graduate> : header==="Pg"? 
        <Pg></Pg> : header === "Undergraduate"?<Undergraduate></Undergraduate> : ""}
    </div>
}