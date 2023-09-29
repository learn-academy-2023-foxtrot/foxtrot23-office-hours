# ❌ ⭕️ Tic Tac Toe

#### Overview

Tic Tac Toe is a classic children's game involving two players alternatively marking squares on a three-by-three grid. While the game play can be considered relatively simple for humans, creating the logic in code is considerably more challenging.

#### Learning Objectives

- can create a logic component to handle the game play
- can pass data and behavior from a parent component to a nested component with props
- can effectively work within a team to achieve a desired outcome

#### Additional Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Render](https://render.com/docs/deploy-create-react-app)

#### Process

- One person on the team accepts the group assignment from GitHub classroom
- Create a team name
- Add additional team members via GitHub handle
- Clone the newly created repository
- `cd` into the repository
- Run $ `yarn` to install the React dependencies
- Create a new branch following the naming instructions described below
- Open the repository in a text editor
- Code!

#### Useful Commands

- $ `yarn start`
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### Tic Tac Toe

This is a web game for two players who are taking turns on one device. You will have to use the component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React as well as be an exercise in creating good user experiences.

When creating a project, it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. `App.js` controls of all the data in state, renders the other components, and performs the game logic.

### Win Condition

The win condition is one of the most challenging aspects of coding Tic Tac Toe. Take some time with your team to discuss the different possibilities. It can be helpful to define the logic by writing it out in regular English words.

There is an interesting approach to the [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840) here. However, this code should NOT be used as is. It must be refactored. The tools used in this example are not current best practices in React. It is provided here as inspiration.

---

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
> - use a container to hold the squares array mapped out assign it to .game-board
> - then give it flex properties in css in order for the container to move the contents inside 

- As a user, I can click on a square to mark it.
> - create an onClick function (gamePlay) that will handle who's turn it is and also leave a mark of that currentPlayer

- As a user, my partner can click on a square after me and see their mark.
> - create a function that will hold a conditional to see if our state currentPlayer variable is holding ❌ as current player, if so, to update state to ⭕️ as our other player

- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally), I can see a notice telling me which player won.
> - create a winner variable in state and create a function (howToWin) that will hold the winningRules (indexes of the corresponding winning indexes in order) then create logic that will compare the squares[index] to check if the spaces are filled with the corresponding currentPlayer to set the winner as that player
> - I stored the notice for a winning player in a conditionally rendered <h2> that will display who has won the game

- As a user, I can't play the game after the game has been won.
> - this will be adding to the gamePlay function if statement to not allow an extra click if winner is true
```jsx
  && !winner
```

- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
> - this is called a Cats Game, I need to create the logic that will check if the values inside of our squares array is !null (NOT null) than each square is taken 

- As a user, I can click on a restart button that will clear the game board.
> - this will be a button
> - the button will reset the squares to null values and reset the current player to ❌