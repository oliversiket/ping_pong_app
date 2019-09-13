import { connect } from "react-redux";
import History from "./History"
import { listGames } from "../../data/actions/api";

const mapStateToProps = ( state )=> {
    return {
        games: state.games,
        game_lang: state.lang.game,
        player_1: state.p1name,
        player_2: state.p2name,
        winner_lang: state.lang.winner
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleGames: () => dispatch(listGames()),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(History);