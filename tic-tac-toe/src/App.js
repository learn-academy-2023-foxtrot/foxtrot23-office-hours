// imports
import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  // state variables
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState("❌")
  const [winner, setWinner] = useState(null)

  // our click logic function
  const gamePlay = (index) => {
    // if the square[index] that was clicked is strictly equal to null (an empty square)
    // LOGICAL AND addition will ensure that when winner is NOT true, we can still choose the square[index]
    // if winner IS true, than we can longer choose the square[index]
    if (squares[index] === null && !winner) {
      // reassigning that square[index] to the current player
      squares[index] = currentPlayer
      // update our state variable / game-board
      setSquares([...squares])
      // invoking our player selection function
      playerSelection()
    }
    // invoking our how to win function
    howToWin()
  }

  // our player selection logic
  const playerSelection = () => {
    if (currentPlayer === "❌") {
      setCurrentPlayer("⭕️")
    } else {
      setCurrentPlayer("❌")
    }
  }

  // game winning logic
  const howToWin = () => {
    // the winning combination of indexes
    const winningRules = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    // using the .forEach method to iterate through our winningRules array and check each winning combination to each square[index]
    winningRules.forEach(value => {
      // first / second / third are parameters that correlate to each of the indexes in each individual array set in our winningRules array
      const [first, second, third] = value
      if (
        // LOGICAL AND means all must be true to equal a winner
        squares[first] === "❌" &&
        squares[second] === "❌" &&
        squares[third] === "❌"
      ) {
        // update our winner state variable
        setWinner("❌")
      } else if (
        squares[first] === "⭕️" &&
        squares[second] === "⭕️" &&
        squares[third] === "⭕️"
      ) {
        setWinner("⭕️")
      }
    })
  }

  // .every method will check every value to see if it is not held by a null value
  const catsGame = squares.every(value => value !== null)

  // logic for our restart button —— setting all states back to initial values 
  const startOver = () => {
    setSquares(Array(9).fill(null))
    setCurrentPlayer("❌")
    setWinner(null)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {/* conditional rendering: if winner is true display <h2> */}
      {winner && <h2> {winner} is the winner!</h2>}
      {/* conditional rendering: if catsGame is true AND there is no winner than display <h2>  */}
      {(catsGame && !winner) && <h2> Game Over, try again</h2>}
      {/* div with className game-board for added styling in css */}
      <div className="game-board">
        {/* squares array mapped returning Square component call */}
        {squares.map((value, index) => {
          return (
            <Square
              // Passing/Sending props in a Square component call below here:
              value={value}
              index={index}
              key={index}
              gamePlay={gamePlay}
            // all above values are props being sent/passed to component file Square in a component call
            />
          )
        })}
      </div>
      <br />
      {/* button to restart the game (triggers startOver function that will reset the array values and winner back to null and current player back to ❌ ) */}
      <button onClick={startOver}>Restart Game</button>
    </>
  )
}

export default App