import { connect } from "react-redux";
import Player from "./Player"
import { patchScore } from "../../data/actions/api";

const mapStateToProps = ( state ) => {
    
    return {
        playerScore: state.player2,
        player: state.p2name,
        servingLang: state.lang.serving,
        server: state.serving === 2,
        winner: state.winner
    };

};

const mapDispatchToProps = dispatch => {
    return{
        handlePlayer: () => dispatch(patchScore(2)),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Player);