import { connect } from "react-redux";
import Loading from "./Loading";
import { listGames } from "../../data/actions/api";

const mapStateToProps = ({ loaded }) => ({
    loaded,
});
const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(listGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);