import initial from "./initial";
import translate from "./translate";

const storeGame = (state, { games }) => {
    return {
        ...state,
        games  ,
        loaded: true, 
    }
}
const history = (state) => (
    {
        ...state,
        display: "history"
    }
)

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
        display: "game"
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
const loaded = (state) => ({
    ...state,
    // set loaded to true
    loaded: true
});

let reducer = (state,action) => {

    switch (action.type) {
        case "changeLanguage" : return changeLanguage(state);
        case "displayHistory" : return history(state);
        case "saveData": return saveData(state, action);
        case "storeGame": return storeGame(state, action);
        case "loaded" : return loaded(state);
        case "setWinner": return setWinner(state, action);
        case "reset" : return { ...initial, games: state.games } ;
        default: return state;
    }
    
};

export default reducer