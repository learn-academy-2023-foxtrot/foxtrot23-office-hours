// importing our useState hook from React
import React, { useState } from "react";

const Box = () => {
  // I am choosing to store my initial color in a state because I will want to change it later
  const [currentColor, setCurrentColor] = useState("white")
  // array of colors that my box with choose from
  const colors = ["red", "blue", "green", "magenta", "purple", "turquoise", "fuchsia"]

  // this function will choose a random number to match to the indexes from our colors array and then set the currentColor to that value
  const colorSelector = () => {
    // random number generator to choose a new index / color for our box
    const randomColor = Math.floor(Math.random() * colors.length)
    // updating our state value to the new location
    setCurrentColor(colors[randomColor])
  }

  return (
    <>
      {/* This div is acting as our box based on the css we assigned it. Then I passed it the logic we created to make this box clickable. Then we added the current color value (string) to the backgroundColor because it takes a string as a value. So cool right? */}
      <div className="box" onClick={colorSelector} style={{ backgroundColor: currentColor }}>

      </div>
    </>
  )
}

export default Box