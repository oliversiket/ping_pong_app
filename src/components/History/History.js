import React from "react";

const History = ({ games = [], game_lang, player_1, player_2, winner_lang, handleGames }) => (
    <div className="row">
        <h1>Games History</h1>
        <br></br>
        <ul className="list-group" >
            { games.map((value,i) => (
                <li key = { i }
                    className="list-group-item"
                ><h2> { game_lang } { i + 1 }</h2>
                    <p>Game finished: { value.complete === true ? "Yes" : "No" }</p>
                    <p> { value.player_1.name }: { value.player_1.score }</p>
                    <p> { value.player_2.name }: { value.player_2.score }</p>
                    <h3>{ winner_lang }: { value.player_1.won ?  value.player_1.name : value.player_2.won ? value.player_2.name : "Still playing..."}</h3>
                </li>
            ))
            }
        </ul>
        <button onClick = { handleGames }>Games</button>
    </div>
)
export default History