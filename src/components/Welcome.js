import React, { Component } from 'react'


//a very basic class. Classes contain states (this. as a usable feature)

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} also known as {this.props.heroName}</h1>


    }
}

export default Welcome;