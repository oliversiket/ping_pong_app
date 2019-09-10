import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import initial from "./Initial";
import reducer from "./Reducer";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initial,
    composeEnhancers(persistState())
);

const render = () => {
    let state = store.getState();
    // pass in state.value as a value prop
    ReactDOM.render(
        <App 
            player1score = { state.player1 }
            player2score = { state.player2 }
            handlePlayerOne={ () => store.dispatch({ type: "playerOneScores", player: "player1" }) }
            handlePlayerTwo={ () => store.dispatch({ type: "playerTwoScores", player: "player2"}) }
            handleReset={ () => store.dispatch({ type: "reset" })}
            server = { state.serving }
            winner = { state.winner }
            games = { state.games }
            changeLanguage = { () => store.dispatch({ type: "changeLanguage" })}
            lang = { state.lang }
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
