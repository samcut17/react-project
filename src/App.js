/*
Name: Sam Cutinelli
Date: April 25, 2025

WEBSITE HOSTED VIA PERSONAL GITHUB

Purpose: React JS application, this is the App.js file
- This file is where the app will be programmed
- Showcasing React: Components, props, events, and styling
- Also connected a style sheet

Throughout creating this, I referred to a variety of online resources
Mainly W3 schools, given I am new to this technology
*/

import logo from './logo.svg'; // Spinning react logo at the top
import './App.css'; // CSS styling
import React, { useState } from 'react';


// Example of a React component that accepts props 
function MoodMessage(props) {
    const boxStyle = { //Style of the box that the selected mood shows up in
      backgroundColor: props.color, //refers to the color prop
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      width: '300px',
      margin: '20px auto'
    };
    
  // Display mood
    return <h2 style={boxStyle}>You are feeling {props.mood}</h2>;
  }

  // Example of a React Component
  function App() { 
    const [mood, setMood] = useState(""); //React hook useState
    const [color, setColor] = useState("");
  
    // Set moods and colors functions, logic to make the component work.
    const setHappy = () => {
      setMood("Happy");
      setColor("green");
    };
  
    const setSad = () => {
      setMood("Sad");
      setColor("blue");
    };
  
    const setExcited = () => {
      setMood("Excited");
      setColor("orange");
    };

    const setAngry = () => {
       setMood("Angry");
       setColor("red");
    };

    const setNervous = () => {
        setMood("Nervous");
        setColor("purple");
    };

    const setRelaxed= () => {
        setMood("Relaxed");
        setColor("lightblue");
    };
  
    // Example of JSX
    return (
      <div>
        {/* This is a JSX comment */}
        {/* Kept spinning react logo at the top */}
        <img src={logo} className="App-logo" alt="logo" />  

        <h2>React Mood Selector</h2>
        <p>Select your current mood!</p>
  
   {/* Event handlers in curly braces */}
   {/* onClick={shoot} instead of onclick="shoot()" */}
        <button onClick={setHappy}>Happy</button>
        <button onClick={setExcited}>Excited</button>
        <button onClick={setRelaxed}>Relaxed</button>
        <button onClick={setNervous}>Nervous</button>
        <button onClick={setSad}>Sad</button>
        <button onClick={setAngry}>Angry</button>
  
   {/* Render the mood when selecged using conditional react operator */}
        {mood && <MoodMessage mood={mood} color={color} />}
  
        <footer>
          <p>Sam Cutinelli — Computer Information Systems Major</p>
          <p>CSCI-215 Final Project - 2025</p>
        </footer>
      </div>
    );
  }
  
// Render component on wep page !!
export default App;