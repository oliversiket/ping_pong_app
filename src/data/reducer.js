import initial from "./initial";
import translate from "./translate";


// const setScore = (state, { player }) => ({ ...state,  [player] : state[player] + 1});

// const setServer = state => { 
//     let deuce = state.player1 >= state.winscore - 1 && state.player2 >= state.winscore - 1,
//         servingFive = Math.floor((state.player1 + state.player2) / state.alternate) % 2 + 1,
//         servingTwo = Math.floor((state.player1 + state.player2) / 2) % 2 + 1

//     return{
//         ...state, 
//         serving: !deuce ? servingFive : servingTwo
//     }
// };
// const  winner = state => {  

//     let winP1 = state.player1 >= state.winscore && state.player1 - state.player2 > 1,
//         winP2 = state.player2 >= state.winscore && state.player2 - state.player1 > 1;

//     return {
//         ...state,
//         winner: winP1 ? 1 : winP2 ? 2 : 0
//     }
// };
const storeGame = (state, { games }) => {
    return {
        ...state,
        games   
    }
}
const changeLanguage = (state) => {
    return {
        ...state,
        lang: state.lang === translate["english"] ? translate["esperanto"] : translate["english"]
    }
}
const saveData = (state, { p1name, p2name, winscore, alternate, currentGameId}) => (
    {
        ...state,
        p1name: p1name,
        p2name: p2name,
        winscore: +winscore,
        alternate: +alternate,
        currentGameId: +currentGameId,
        gameIsOn: true
    }
)
const setWinner = (state, { winner, serving, player1, player2}) => (
    {
        ...state,
        player1,
        player2,
        winner,
        serving
    }
)

let reducer = (state,action) => {

    switch (action.type) {
        case "changeLanguage" : return changeLanguage(state);
        case "saveData": return saveData(state, action);
        case "storeGame": return storeGame(state, action)
        case "setWinner": return setWinner(state, action);
        case "reset" : return { ...initial, games: state.games } ;
        default: return state;
    }
    
};

export default reducer