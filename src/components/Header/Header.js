import React from "react";

const Header = ({ changeLanguage }) => (

    <header className="page-header">
        <h1>PingPong</h1> <button onClick={ changeLanguage }className="btn btn-warning">EN / EO</button>
    </header>

)
export default Header