import { connect } from "react-redux";
import Player from "./Player"
import { playerOne } from "../../data/actions/state";
import { patchScore } from "../../data/actions/api";

const mapStateToProps = ( state ) => {
    
    return {
        playerScore: state.player1,
        player: state.p1name,
        servingLang: state.lang.serving,
        server: state.serving === 1,
        winner: state.winner
    };

};

const mapDispatchToProps = dispatch => {
    return{
        handlePlayer: () => dispatch(patchScore(1)),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Player);