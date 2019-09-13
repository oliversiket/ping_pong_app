import React from "react";

const Winner = ({ winner, player1, player2 }) => (
   
    <h2 className="jumbotron">{ winner === 0 ? "" : winner === 1 ?  player1 : player2}</h2>
    
)
export default Winner