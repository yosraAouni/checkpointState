import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname:"Ouni Yosra",
            bio:"Gomycode Menzah 5",
            profession:"Web Developer",
            imgSrc:"https://salondumariagegap.fr/wp-content/uploads/avatar-femme.jpg",
            counter:0,
        }
        
            
        }
    componentDidMount(){
        setInterval(()=>this.setState({counter:this.state.counter+1}),1000)
    }
    render() {
        return (
            <div>
                <h1>{this.state.fullname}</h1>
                <h2>{this.state.bio}</h2>
                <h2>{this.state.profession}</h2>
                <img src={this.state.imgSrc} alt="pic"/> 
                <div>counter:{this.state.counter}</div>
            </div>
        )
    }

}