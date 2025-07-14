# Simple Counter Application

This is a straightforward counter application built using React and Redux. It demonstrates the basic principles of state management with Redux, allowing you to increase or decrease a numerical counter.

## How It Works

At its core, this application has a single counter value that you can interact with.

- See the Number: A display shows the current value of the counter.
- Add One: A "plus" button increases the counter by one.
- Subtract One: A "minus" button decreases the counter by one. The counter will not go below zero.


### What's Inside 

- React: For building the user interface.
- Redux: A predictable state container that helps manage the application's data.
    - Actions: Simple objects that describe what happened.
    - Reducers: Functions that take the current state and an action, and return a *new* state based on that action. This is where the logic for changing the counter lives.
    - Store: The single source of truth for the application's state.

- React Redux : Connects React components to the Redux store.
    - `useSelector`: Allows a component to read data from the Redux store.
    - `useDispatch`: Allows a component to send actions to the Redux store.

- MUI (Material-UI): A popular React UI library used for the visual components like buttons, display boxes, and layout.

- CSS Modules: Used for styling components, ensuring that styles are localized to prevent conflicts.

## file Structure

- `Counter.js`: This is the main React component that you see on the screen. It displays the counter and the buttons, and dispatches actions to change the count.

- `redux/counterAction.js`: Defines the types of actions that can occur (e.g., `INCREMENT`, `DECREMENT`) and provides functions to create these actions.

- `redux/counterReducer.js`: Contains the core logic that determines how the counter's state changes in response to actions.

- `store.js`: Sets up the Redux store, bringing together the reducer to manage the application's state.

