import React from 'react'


//How to write not using JSX (AKA why you need to import react with most files)
const Hello = () => {
    // return(
    //     <div className ='dummyClass>
    //         <h1>HelloOoo</h1>
    //     </div>
    // )
return React.createElement(
    'div',
    {id:'hello', className:'dummyClass'},
    React.createElement(
            'h2',
            null, 
            'written without jsx!'));

}


export default Hello;
