import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";

const initial = {
    player1: 0,
    player2: 0,
};

let reducer = (state,action) => {

    switch (action.type) {
        case "incrementp1" : return { ...state, player1: state.player1 + 1 };
        default: return state;
    }

};

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

const render = () => {
    let state = store.getState();
    console.log(state.player1);
    // pass in state.value as a value prop
    ReactDOM.render(
        <App 
            player1score = { state.player1 }
            player2score = { state.player2 }
            handleIncrement={ () => store.dispatch({ type: "incrementp1" }) }
        />,
    document.getElementById("root")
    );

};

store.subscribe(render);
render();

// store.dispatch({ type: "increment" });



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
