import { connect } from "react-redux";
import Settings from "./Settings";
import { saveData } from "../../data/actions/state";
import { postGame } from "../../data/actions/api"

const mapStateToProps = ( state ) => {
    return {
        p1name: state.p1name,
        p2name: state.p2name,
        winscore: state.winscore,
        alt: state.alternate,
        gameIsOn: state.gameIsOn,
        p1Lang: state.lang.p1Name,
        p2Lang: state.lang.p2Name,
        winScoreLang: state.lang.winningScore,
        altEveryLang: state.lang.altEvery,
        startLang: state.lang.startGame
    };
};
const mapDispatchToProps = dispatch => {
    return{
        handleData: state => dispatch(postGame(state)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);