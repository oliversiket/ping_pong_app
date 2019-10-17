export const reset = () => {
    return {
        type: "reset",
    }; 
};
export const displayHist = () => {
    return {
        type: "displayHistory",
    }; 
};

export const language = () => {
    return {
        type: "changeLanguage",
    }; 
}
export const saveData = ( data ) => {
    return {
        type: "saveData",
        p1name: data.p1name,
        p2name: data.p2name,
        winscore: data.winscore,
        alternate: data.alt,
        currentGameId: data.currentGameId,
    };
}
export const setWinner = ( data ) => {
    return {
        type: "setWinner",
        player1: data.player1,
        player2: data.player2,
        winner: data.winner,
        serving: data.serving 
    };
}
export const updateHistory = ( data ) => {
    return {
        type: "storeGame",
        games: data.games
    };
}
export const loaded = ( data ) => {
    return {
        type: "loaded"
}; };

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