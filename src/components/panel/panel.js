import esc from "./icons/escape.png";
import la2button from "./icons/la2button.png";
import clear from "./icons/clear.png";
import listicon from "./icons/listicon.png";
import React from "react";
import "./panel.css"

class Panel extends React.Component{
    render() {
        return(<div className="container-panel">
            <div className="panel-header">
                <img style={{cursor: "pointer"}} src={esc} alt="button toggle screen"/>
                <a href="https://littlealchemy.com/">Are you stuck? Need a hint?</a>
            </div>
            <div className="panel-footer">
                <div className="result">
                    <div>18/100</div>
                </div>
                <div className="list-icons">
                    <img src={la2button} alt="la2button"/>
                    <img src={clear} alt="clear"/>
                    <img src={listicon} alt="listicon"/>
                </div>
            </div>
        </div>)
    }
}
export default Panel;