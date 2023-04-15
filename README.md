## counterapp
## Using Redux created a counter app  
## Redux is a predictable state container for JavaScript apps.
## steps 
Here are the steps to create a simple counter app using Redux:

Set up your project:
Create a new React project using your preferred tool. You will also need to install the following dependencies: redux, react-redux.

## Create a Redux store:
Create a new file called store.js and import createStore from redux. Create a new reducer function that takes state and action as parameters and returns a new state based on the action type. Finally, create a store by passing the reducer function to createStore.
## Create a React component:
Create a new file called Counter.js and import useSelector and useDispatch from react-redux. Create a new component that displays the current count and two buttons to increment and decrement the count. Use the useSelector hook to access the count from the store, and the useDispatch hook to dispatch the increment and decrement actions.
## Render the component:
In your App.js file, import the Counter component and wrap it with the Provider component from react-redux. Pass the store as a prop to the Provider component.
