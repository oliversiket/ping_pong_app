import { connect } from "react-redux";
import Reset from "./Reset"
import { reset } from "../../data/actions/state"

const mapStateToProps = ( state ) => {
    
    return {
        translate: state.lang.reset,
    };

};

const mapDispatchToProps = dispatch => {
    return{
        handleReset: () => dispatch(reset()),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Reset);