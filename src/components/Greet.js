import React from 'react'


//function formating with a brief note on different export methods.
//export optionally can have a non default value.

// function Greet(){
//     return <h1>Hello my friend!</h1>
// }

const Greet = (props) =>  {

    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
};

// export const Greet = () =><h1>Hello my friend</h1>

export default Greet;