import React from 'react';
import './App.css';
// import {Greet} from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'



function App() {
  return (
    <div className="App">
      <Greet name ="Bruce" heroName ="Batman" >
        <p>I'm an orphan</p>
        </Greet>
      <Greet name ="Dianna" heroName ="WonderWoman"/>
        <button>Click Me!</button>
      <Greet name ="Me!" heroName ="Plunderwondr"/>
      <Welcome name ="Bruce" heroName ="Batman"/>
      <Welcome name ="Dianna" heroName ="WonderWoman"/>
      <Hello/>
    </div>
  );
}

export default App;
