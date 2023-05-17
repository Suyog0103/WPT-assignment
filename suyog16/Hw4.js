import {useState} from "react"
export default function Login()
{
    let [hand1, setHand1]=useState("")
    let [hand2, setHand2]=useState("")
    let [hand3, setHand3]=useState("")

    function handler1(event)
    {
        setHand1(event.target.value)
    }

    function handler2(event)
    {
        setHand2(event.target.value)
    }

    function login()
    {
        if(hand1=="suyog" && hand2 =="123")
            setHand3("Log in Successful, Suyog")
        else if(hand1=="shejul" && hand2 =="456")
            setHand3("Log in Successful, Shejul")
        else if(hand1=="pratik" && hand2 =="789")
            setHand3("Log in Successful, Pratik")
        else 
            setHand3("Log in Failed")
    }



    return<div>
        <p>Enter Name: <input type="text" onBlur={handler1}></input></p>
        <p>Enter Password: <input type="text" onBlur={handler2}></input></p>
        <p><input type="button" onClick={login} value="Log In"></input></p>
        <p>{hand3}</p>
    </div>
}