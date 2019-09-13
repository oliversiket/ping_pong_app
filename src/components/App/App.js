import React from "react";
import Winner from "../Winner";
import Reset from "../Reset";
import Header from "../Header";
import Settings from "../Settings";
import History from "../History"
import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Loading from "../Loading";

const App = ( { gameIsOn } ) => (
  <React.Fragment>
      {/* header */}
        <Header />
        
        {/* <Loading> */}
            { !gameIsOn ? <Settings /> : null }
        {/* </Loading> */}

        
        {  gameIsOn ? 
            // <Loading>
                <>
                    {/* scores */}
                    <div className="row">
                        <Player1/>
                        <Player2 />  
                    </div>

                    { /* winner message */}
                        <Winner />
                    <hr />

                    { /* reset button */}
                        <Reset />
                    <hr />

                    {/* { Games output } */}
                        <History /> 
                </> : null
            // </Loading> 
        }

    </React.Fragment>
);

export default App