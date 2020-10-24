import { createStore } from 'redux';

// let store = createStore(reducer);

// Store is a globalized state
// holds all the data/state for the application


// Action -> Describes what we want to do e.g. increment will add +1 to our counter
const increment = () => {
    return {
        type: 'INCREMENT', //(name or type)

    }
}

const increment = () => {
    return {
        type: 'DECREMENT', //(name or type)

    }
}

// Reducer - DEscribes how our actions transform the state into our next state

const counter = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
}
// Checks which action we did, and then it will modify our store
let store = createStore(counter);

store.subscribe(() => console.log(store.getState()))

// Dispatch -> How we execute that action
store.dispatch(increment());