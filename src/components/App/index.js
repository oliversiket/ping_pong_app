import { connect } from "react-redux";
import App from "./App"


const mapStateToProps = ( state ) => {
    
    return {
        gameIsOn: state.gameIsOn,
    };

};

export default connect(mapStateToProps)(App);