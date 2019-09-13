import React from "react";

const Reset = ({ handleReset, translate }) => (

        <button 
          className="btn btn-danger"
          onClick = { handleReset }
        > 
            { translate }
        </button>

)
export default Reset