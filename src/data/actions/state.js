import Player1 from "../../components/Player/Player1";

export const playerOne = (player) => {
    return {
        type: "playerOneScores",
        player: player
    };
};

export const playerTwo = (player) => {
    return {
        type: "playerTwoScores",
        player: player
    };
};

export const reset = () => {
    return {
        type: "reset",
    }; 
};

export const language = () => {
    return {
        type: "changeLanguage",
    }; 
}
export const saveData = ( state ) => {
    return {
        type: "saveData",
        p1name: state.p1name,
        p2name: state.p2name,
        winscore: state.winscore,
        alternate: state.alt,
        currentGameId: state.currentGameId,
    };
}
export const setWinner = ( state ) => {
    return {
        type: "setWinner",
        player1: state.player1,
        player2: state.player2,
        winner: state.winner,
        serving: state.serving 
    };
}
export const updateHistory = ( state ) => {
    return {
        type: "storeGame",
        games: state.games
    };
}


// export const saveName = (type, name) => {
//     return {
//       type: type,
//       name: name
//     }; 
// };
// export const saveNumber = (type, number) => {
//     return {
//       type: type,
//       number: +number
//     }; 
// };


// export const saveNameP1 = (name) => {
//     return {
//       type: "nameP1",
//       name: name,
//     }; 
// };

// export const saveNameP2 = (name) => {
//     return {
//       type: "nameP2",
//       name: name,
//     }; 
// };
// export const saveWinScore = (number) => {
//     return {
//       type: "winScore",
//       number: +number,
//     }; 
// };
// export const saveAlt = (number) => {
//     return {
//       type: "alt",
//       number: +number,
//     }; 
// };