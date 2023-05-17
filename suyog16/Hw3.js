import {useState} from "react"
export default function Hw3()
{
    let [str, setStr]=useState("")
    let [upp, setupp]=useState("")
    let [lower, setlower]=useState("")
    let [title, settitle]=useState("")

    function handler(event)
    {
        setStr(event.target.value)
    }

    function upper1(event)
    {
        if(event.target.checked)
        {
            setupp(str.toUpperCase())
        }
        else
        {
            setupp("")
        }
    }

    function lower1(event)
    {
        if(event.target.checked)
        {
            setlower(str.toLowerCase())
        }
        else
        {
            setlower("")
        }
    }
    function title1(event)
    {
        if(event.target.checked)
        {
            settitle(str.charAt(0).toUpperCase().concat(str.substring(1).toLowerCase()))
        }
        else
        {
            settitle()
        }
    }
    return <div>
        <p><input type="text" onBlur={handler}></input></p>
        <p>Uppercase: <input type="checkbox" onClick={upper1}></input></p>  
        <p>Lowercase: <input type="checkbox" onClick={lower1}></input></p>  
        <p>Titlecase: <input type="checkbox" onClick={title1}></input></p>  

        <p>{upp}</p>
        <p>{lower}</p>
        <p>{title}</p>
    </div>
}