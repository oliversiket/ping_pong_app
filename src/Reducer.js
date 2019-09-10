import initial from "./Initial";

const setScore = (state, { player }) => ({ ...state,  [player] : state[player] + 1});

const setServer = state => { 
    let deuce = state.player1 >= 20 && state.player2 >= 20,
        servingFive = Math.floor((state.player1 + state.player2) / 5) % 2 + 1,
        servingTwo = Math.floor((state.player1 + state.player2) / 2) % 2 + 1

    return{
        ...state, 
        serving: !deuce ? servingFive : servingTwo
    }
};
const  winner = state => {  

    let winP1 = state.player1 >= 21 && state.player1 - state.player2 > 1,
        winP2 = state.player2 >= 21 && state.player2 - state.player1 > 1;

    return {
        ...state,
        winner: winP1 ? 1 : winP2 ? 2 : 0
    }
};
const storeGame = state => {
    let gotaWinner = state.winner === 1 || state.winner === 2,
        newGame = {
            "player_1":{
                score: state.player1,
                won: state.winner === 1 ? true : false
            },
            "player_2":{
                score: state.player2,
                won: state.winner === 2 ? true : false
            }
        };
    return {
        ...state,
        games: gotaWinner ? [ ...state.games, newGame ] : state.games
        
    }
}
const changeLanguage = (state) => {
    return {
        ...state,
        lang: state.lang === "english" ? "esperanto" : "english"
    }
}
let reducer = (state,action) => {

    switch (action.type) {
        case "playerOneScores" : return storeGame(winner(setServer(setScore(state, action))));
        case "playerTwoScores" : return storeGame(winner(setServer(setScore(state, action))));
        case "changeLanguage" : return changeLanguage(state);
        case "reset" : return { ...initial, games: state.games } ;
        default: return state;
    }
    
};

export default reducer