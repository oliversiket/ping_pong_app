import { connect } from "react-redux";
import History from "./History"
// import { listGames } from "../../data/actions/api";

const mapStateToProps = ( state )=> {
    return {
        games: state.games,
        game_lang: state.lang.game,
        winner_lang: state.lang.winner,
        gamesHist_lang: state.lang.displayHistory,
        gameFinish_lang: state.lang.gameFinished,
        yes: state.lang.yes,
        no: state.lang.no,
        still: state.lang.stillPlay
    };
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleGames: () => dispatch(listGames()),
//     };
// };
  
export default connect(mapStateToProps)(History);