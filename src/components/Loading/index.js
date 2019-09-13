import { connect } from "react-redux";
import Loading from "./Loading";

const mapStateToProps = ({ loaded }) => ({
    loaded,
});
export default connect(mapStateToProps)(Loading);