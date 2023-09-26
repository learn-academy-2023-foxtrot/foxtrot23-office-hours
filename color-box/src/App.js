// importing useState hook from React
import React, { useState } from "react";
// importing component file Box.js from components folder
import Box from "./components/Box"
// importing CSS styles sheet
import "./App.css"

// declaration of functional component
const App = () => {
  // the boxes State variable is going to collect my component calls of <Box/>, so then we can map through to see them displayed
  const [boxes, setBoxes] = useState([])
  // console.log("boxes console log", boxes)

  // this function will hold the logic that will add a color box (<Box/>) to our webpage
  const addTheBox = () => {
    // this will add the component call <Box/> to my state variable boxes above ^, with a built in method (.concat) that works on arrays since I set it to an empty array to collect my component calls.
    setBoxes(boxes.concat(<Box />))
  }

  // this function will hold the logic that will remove a color box (<Box/>) from our webpage
  const removeTheBox = () => {
    // this is going to subract the last component call <Box/> from boxes array in our state by using the (.slice) built in method to take off the boxes.length last value
    setBoxes(boxes.slice(0, boxes.length - 1))
  }

  return (
    <>
      <h1> Office Hours Color Box</h1>
      {/* This is the component call for us to display one color box */}
      {/* <Box/> */}
      <button onClick={addTheBox}> Add a box </button>
      <button onClick={removeTheBox}> Remove a box </button>
      {/* this div's purpose is to contain all of our boxes so I can apply some css to it */}
      <div className="color-boxes">
        {/* Here we want to map through our array of boxes in our state which hold all of our component calls ( <Box/> ) for however many times we hit the Add a box button above. Notice our parameter names inside of those purple parenthesis  */}
        {boxes.map((theActualBox, index) => {
          // .map is a HOF that needs it's own return
          return (
            // index is a parameter we used that is given because we are mapping through an array
            <div key={index}>
              {/* theActualBox is also a parameter that will be replaced with the component calls that are living inside of our boxes state variable */}
              {theActualBox}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App