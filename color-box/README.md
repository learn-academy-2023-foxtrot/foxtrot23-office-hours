# Color Box
Challenge: Color Box
As a developer, you are tasked with creating a color box application. The application will allow the user to click a box and see a different color with every click.

📚 User Stories
1. As a user, I can see a square box on the screen with a black border and a white background.
  > - to make a square we need equal sides (height and width)
  > - css let's us use border properties (border: 2px solid black)
  > - white background will come default

2. As a user, I can see the default color name "white" inside the box.
  > - to see a string inside of our box (which we used a div and css to create), we can simply just call our state (string - white) inside of our div
  ```jsx
  const [currentColor, setCurrentColor] = setState("white")
  ```
  ```jsx
  <div className="box">
    {currentColor}
  </div>
  ```

3. As a user, every time I click on the box the name of a different color appears.
Possible color names: red, orange, yellow, green, blue, purple, pink
  > - "click" always reminds me of the need for logic (onClick)
  > - the click needs to change our box to display the string of new color, so we need to store the extra colors somewhere (arrays - collection of data)
  ```jsx
  const colors = ["red", "blue", "green", "magenta", "purple", "turquoise", "fuchsia"]
  ```  
  > - our onClick will require a function (colorSelector) that will be updating that value in our state to show the next color in the array inside of the div that we call on our state
  ```jsx
  const colorSelector = () => {
    const randomColor = Math.floor(Math.random() * colors.length)
    setCurrentColor(colors[randomColor])
  }
  ```
  ```jsx
  <div className="box">
    {currentColor}
  </div>
  ```


4. As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
> - *HINT HINT* "background color"
> - we know that there is a way to change background colors in css so let's do that!
> - we chose to do it inline
```jsx
style={{ backgroundColor: currentColor }}
```

5. As a user, I can see many boxes on the page all acting independently of one another.
> - let's do a few component calls and watch them act independently with their own states!
```jsx
<Box/>
<Box/>
<Box/>
<Box/>
<Box/>
```

🏔 Stretch Goals

As a user, I can start with no boxes on the screen.
> - remove all component calls until they are conditionally rendered

As a user, I can see a button to add a box.
> - add a button with the label of "Add a box"

As a user, I can see a button to remove a box.
> - add a button with the label of "Remove a box"

As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes.
> - the onClick needs to trigger the conditional rendering of the boxes
> - our boxes that we add will be held in an array to hold them
```jsx
const [boxes, setBoxes] = useState([])
```
```jsx
{boxes.map((theActualBox, index) => {
  return (
    <div key={index}>
      {theActualBox}
    </div>
  )
})}
```
> - the array then allows us the option to map through it to then display every box added with the onClick
```jsx
const addTheBox = () => {
  setBoxes(boxes.concat(<Box />))
}
```

As a user, every time I click the remove button, I can remove the last box in the series.
> - a similar approach to the addTheBox logic to then remove the last box from the box array
```jsx
const removeTheBox = () => {
  setBoxes(boxes.slice(0, boxes.length - 1))
}
```