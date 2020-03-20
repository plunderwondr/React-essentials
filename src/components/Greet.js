import React from 'react'


//function formating with a brief note on different export methods.
//export optionally can have a non default value.

// function Greet(){
//     return <h1>Hello my friend!</h1>
// }

const Greet = props =>  {
    const {name, heroName,children} = props

    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    )
};

// export const Greet = () =><h1>Hello my friend</h1>

export default Greet;