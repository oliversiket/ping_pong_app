import { connect } from "react-redux";
import App from "./App"


const mapStateToProps = ( state ) => {
    
    return {
        display: state.display
    };

};

export default connect(mapStateToProps)(App);