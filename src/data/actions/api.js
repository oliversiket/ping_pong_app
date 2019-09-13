import axios from "../../axios";
import { saveData, setWinner, updateHistory  } from "./state";

export const postGame = game => dispatch => {
    // make a PUT request

    axios.post("games", {
        // pass along the data to the API
        // can pass in a regular object literal
        // axios will convert into JSON
        
            player_1: game.p1name,
            player_2: game.p2name,
            winning_score: game.winscore,
            change_serve: game.alt
        
    }).then(({ data }) => {
        // get the step result off the data
        // pass it along to the existing step action
        dispatch(saveData({ 
            p1name: data.data.player_1.name,
            p2name: data.data.player_2.name,
            winscore: data.data.winning_score,
            alt: data.data.change_serve,
            currentGameId: data.data.id
        }))
        console.log(data)
    }); 
};

// accept getState as the second argument
// it's always passed in, but you don't always need it
export const patchScore = player => (dispatch, getState) => {
    // use getState function to get the state object
    // then read the currentGameID property
    const id = getState().currentGameId;

    axios.patch(`/games/${id}/score`, {
        player: player

    }).then(({ data }) => {
        console.log(data)
        dispatch(setWinner({
            player1: data.data.player_1.score,
            player2: data.data.player_2.score,
            winner: data.data.player_1.won === true ? 1 : data.data.player_2.won === true ? 2 : 0,
            serving: data.data.player_1.serving === true ? 1 : 2
        }))
    });
};

export const listGames = games => (dispatch) => {

    axios.get("games", {
        
    }).then(({ data }) => {
        console.log(data)
        dispatch(updateHistory({
            games: data.data
        }))
        
    });
};
