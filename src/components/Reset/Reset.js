import React from "react";

const Reset = ({ handleReset, reset, displayHistory, history }) => (
    <React.Fragment>
        <button 
          className="pull-left btn btn-danger"
          onClick = { handleReset }
        > 
            { reset }
        </button>
        <button 
          className="pull-right btn btn-info"
          onClick = { displayHistory }
        > 
            { history }
        </button>
    </React.Fragment>
)
export default Reset