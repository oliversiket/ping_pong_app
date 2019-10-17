import { connect } from "react-redux";
import Reset from "./Reset"
import { reset, displayHist } from "../../data/actions/state"
import { listGames } from "../../data/actions/api"

const mapStateToProps = ( state ) => {
    
    return {
        reset: state.lang.reset,
        history: state.lang.displayHistory
    };

};

const mapDispatchToProps = dispatch => {
    return{
        handleReset: () => dispatch(reset()),
        displayHistory: () => dispatch(displayHist())
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Reset);