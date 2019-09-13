import React, { Component } from "react";

class Settings extends Component {
    constructor(props) {

        super(props);

        this.state = {
            p1name: props.p1name,
            p2name: props.p2name,
            winscore: props.winscore,
            alt: props.alt,
            gameIsOn: props.gameIsOn
        };

        this.handleP1 = this.handleP1.bind(this);
        this.handleP2 = this.handleP2.bind(this);
        this.handleWinScore = this.handleWinScore.bind(this);
        this.handleAlt = this.handleAlt.bind(this);
        this.handleStart = this.handleStart.bind(this);
    }
    handleP1(e) {
        this.setState({ p1name: e.currentTarget.value });
    }
    handleP2(e) {
        this.setState({ p2name: e.currentTarget.value });
    }
    handleWinScore(e) {
        this.setState({ winscore: e.currentTarget.value });
    }
    handleAlt(e) {
        this.setState({ alt: e.currentTarget.value });
    }
    handleStart(e) {
        e.preventDefault();
        this.props.handleData(this.state);
    }

    render() {
        let { p1name, p2name, winscore, alt, gameIsOn } = this.state;
        let { p1Lang, p2Lang, winScoreLang, altEveryLang, startLang } = this.props;

        return (
            <React.Fragment>

                <form onSubmit={ this.handleStart }>
                    <div className="form-group">
                        <label> { p1Lang }</label>
                        <input
                            className="form-control"
                            onChange={ this.handleP1 }
                            value={ p1name }
                        />
                        <label>{ p2Lang }</label>
                        <input
                            className="form-control"
                            onChange={ this.handleP2 }
                            value={ p2name }
                        /> 
                        <label> { winScoreLang }</label>
                        <input
                            type = "number"
                            className="form-control"
                            onChange={ this.handleWinScore }
                            value={ winscore }
                        />
                        <label>{ altEveryLang }</label>
                        <input
                            type = "number"
                            className="form-control"
                            onChange={ this.handleAlt }
                            value={ alt }
                        />
                        
                    </div>
                    <button className="btn btn-primary">{ startLang }</button>
                </form>
            </React.Fragment>
        ); 
    }
}
export default Settings;