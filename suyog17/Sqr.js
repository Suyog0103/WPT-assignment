import React from "react";

export default class Sqr extends React.Component
{
   
    
    constructor()
    {
        super()
        this.state={square:0}
        this.num=0

    }

    funSquare=(event)=>
    {
 
        this.num = event.target.value
        let s = this.num * this.num
        this.setState({square:s})
    }
    render()
    {
        return <div>
                Number: <input type="number" onBlur={this.funSquare} ></input>
                <p>{this.state.square}</p>
        </div>
    }
}