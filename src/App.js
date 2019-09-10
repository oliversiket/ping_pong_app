import React from "react";
import translate from "./translate";

const App = ( { player1score, player2score, handlePlayerOne, handlePlayerTwo, handleReset, server, winner, games, changeLanguage, lang } ) => (
    <React.Fragment>
        {/* header */}
        <header className="page-header">
            <h1>PingPong</h1> <button onClick={ changeLanguage }className="btn btn-warning">EN / EO</button>
        </header>

        {/* scores */}
        <div className="row">
            <div className="col-xs-6">
                <p> { translate[lang].player_1 } { server === 1 ? <span className="pull-right label label-success">Serving</span> : null}</p>
                <p className="well">{ player1score }</p>
                { winner === 1 || winner === 2 ? null : <button 
                  className="btn btn-primary"
                  onClick = { handlePlayerOne }
                >+</button> 
                }
            </div>
                
            <div className="col-xs-6">
                <p>{ translate[lang].player_2 } { server === 2 ? <span className="pull-right label label-success">Serving</span> : null}</p>
                <p className="well">{ player2score }</p>
                { winner === 1 || winner === 2 ? null : <button 
                  className="btn btn-primary"
                  onClick = { handlePlayerTwo }
                >+</button>
                }
            </div>
        </div>

        { /* winner message */}
        <h2 className="jumbotron">{ winner === 0 ? "" : winner === 1 ?  translate[lang].player_1  : translate[lang].player_2}</h2>

        <hr />

        { /* reset button */}
        <button 
          className="btn btn-danger"
          onClick = { handleReset }
        > { translate[lang].reset }</button>

        {/* { Games output } */}
        <div className="row">
            <ul className="list-group">
              { games.map((value,i) => (
                    <li key = { i }
                        className="list-group-item"
                    ><h2> Game { i + 1 }</h2>
                        <p>Player 1: { value.player_1.score }</p>
                        <p>Player 2: { value.player_2.score }</p>
                        <h3>Winner: { value.player_1.score > value.player_2.score ? "Player 1" : "Player 2"}</h3>
                    </li>
                ))
              } 
            </ul>
        </div>
    </React.Fragment>
);

export default App;