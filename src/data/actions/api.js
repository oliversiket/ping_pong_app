import axios from "../../axios";
import { saveData, setWinner, updateHistory, loaded  } from "./state";

export const postGame = game => dispatch => {

    axios.post("games", {
            player_1: game.p1name,
            player_2: game.p2name,
            winning_score: game.winscore,
            change_serve: game.alt
        
    }).then(({ data }) => {
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


export const patchScore = player => (dispatch, getState) => {
  
    const id = getState().currentGameId;

    axios.patch(`/games/${id}/score`, {
        player: player

    }).then(({ data }) => {
        dispatch(setWinner({
            player1: data.data.player_1.score,
            player2: data.data.player_2.score,
            winner: data.data.player_1.won === true ? 1 : data.data.player_2.won === true ? 2 : 0,
            serving: data.data.player_1.serving === true ? 1 : 2
        }))
    });
};

export const listGames = () => (dispatch) => {

    axios.get("games", {
        
    }).then(({ data }) => {
        console.log(data)
        dispatch(updateHistory({
            games: data.data
        }))
        
    });
};
