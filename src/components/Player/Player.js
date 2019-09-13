import React from "react";

const Player = ({ playerScore, handlePlayer, server, winner, player, servingLang }) => (
  
    <div className="col-xs-6">
        <p> { player } { server ? <span className="pull-right label label-success">{ servingLang }</span> : null}</p>
        <p className="well">{ playerScore }</p>
        { winner === 1 || winner === 2 ? null : <button 
            className="btn btn-primary"
            onClick = { handlePlayer }
        >+</button> 
        }
    </div>    
  );

export default Player;

