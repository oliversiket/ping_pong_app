import { connect } from "react-redux";
import Winner from "./Winner"

const mapStateToProps = (state) => {
    
    return {
        player1: state.lang.player_won,
        player2: state.lang.player_won,
        winner: state.winner
    };

};
  
export default connect(mapStateToProps)(Winner);