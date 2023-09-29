import React from 'react'

// props being passed here
const Square = (props) => {

  // handleClick function for our onClick
  const handleClick = () => {
    // using the gamePlay function from App.js
    // prop being used here
    { props.gamePlay(props.index) }
  }

  return (
    // handleClick will then invoke the gamePlay function from App.js
    <div className="square" onClick={handleClick}>
      {props.value}
    </div>
  )
}
export default Square
