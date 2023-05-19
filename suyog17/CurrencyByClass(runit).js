import React from "react"

export default class CorrencyConverter extends React.Component
{
    constructor()
    {
    super()
        this.state={val1:0}
        this.state={s1:0}
        this.state={s2:0}
        this.state={value:0}
    } 

    converter=(event)=>
    {
        if(this.s1==="rupees" && this.s2 === "rupees")
            this.setState({value:val1})
        else if(this.s1==="rupees" && this.s2 === "dollar")
            this.setState({value:val1/81})
        else if(this.s1==="rupees" && this.s2 === "euro")
            this.setState({value:val1/89})
        else if(this.s1==="dollar" && this.s2 === "rupees")
            this.setState({value:val1*81})
        else if(this.s1==="dollar" && this.s2 === "dollar")
            this.setState({value:val1})
        else if(this.s1==="dollar" && this.s2 === "euro")
            this.setState({value:val1/1.1})
        else if(tis.s1==="euro" && this.s2 === "rupees")
            this.setState({value:val1*89})
        else if(this.s1==="euro" && this.s2 === "dollar")
            this.setState(val1*1.1)
        else if(this.s1==="euro" && this.s2 === "euro")
            this.setState(val1)
    }

    render()
    {
    return<div>
        
        Number: <input type="number" onBlur={(event)=>{this.setval1(event.target.value)}}></input>
        
        From: <select onClick={(event)=>{this.sets1(event.target.value)}}>
            <option value= "rupees">Rupees</option>
            <option value= "dollar">Dollar</option>
            <option value= "euro">Euro</option>
        
        </select>
        To: <select onClick={(event)=>{this.sets2(event.target.value)}}>
            <option value= "rupees">Rupees</option>
            <option value= "dollar">Dollar</option>
            <option value= "euro">Euro</option>
        </select>
        < button onClick={this.converter}>Convert</button>
        <p>{this.state.value}</p>
    </div>
    }
}