import translate from "./translate";

const initial = {
    currentGameId: 0,
    p1name: "",
    p2name: "",
    player1: 0,
    player2: 0,
    serving: 0,
    winscore: 21,
    winner: 0,
    alternate: 5,
    display: "settings",
    loaded: false,
    lang: translate["english"],
    games:[
    ]
};

export default initial