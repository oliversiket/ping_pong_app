import { connect } from "react-redux";
import Header from "./Header"
import { language } from "../../data/actions/state"

const mapDispatchToProps = dispatch => {
    return{
        changeLanguage: () => dispatch(language()),
    };
}

export default connect(null, mapDispatchToProps)(Header);