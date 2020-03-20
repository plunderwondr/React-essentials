import React, { Component } from 'react'


//a very basic class. Classes contain states (this. as a usable feature)

class Welcome extends Component{
    render(){
        const {name,heroName} = this.props
        // const {state1, state2} = this.state
        return <h1>Welcome {name} also known as {heroName}</h1>
    }
}

export default Welcome;