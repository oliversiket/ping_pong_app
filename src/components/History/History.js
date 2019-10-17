import React from "react";

const History = ({ games = [], game_lang, winner_lang, gamesHist_lang, gameFinish_lang, yes, no, still }) => (
    <div className="row">
        <h1>{ gamesHist_lang }</h1>
        <br></br>
        <ul className="list-group" >
            { games.map((value,i) => (
                <li key = { i }
                    className="list-group-item"
                ><h2> { game_lang } { i + 1 }<span className="pull-right label label-success">Id: { value.id }</span><button className="pull-right btn btn-danger">x</button></h2>
                    <p>{ gameFinish_lang }: { value.complete === true ? yes : no }</p>
                    <p> { value.player_1.name }: { value.player_1.score }</p>
                    <p> { value.player_2.name }: { value.player_2.score }</p>
                    <h3>{ winner_lang }: { value.player_1.won ?  value.player_1.name : value.player_2.won ? value.player_2.name : still}</h3>
                </li>
            ))
            }
        </ul>
    </div>
)
export default History