import React from "react";
import "./content.css";
import esc from "./img/escape.png";
import la2button from "./img/la2button.png";
import clear from "./img/clear.png";
import listicon from "./img/listicon.png";
import {Droppable} from "react-beautiful-dnd";
import Menubar from "../menubar/menubar";

class Content extends React.Component {
    state = {
        contentId: "1"
    };

    render() {
        return (
            <Droppable droppableId={this.state.contentId}>
                {
                    (provider) => (
                        <div>
                            <div className="container-content"
                                 ref={provider.innerRef}
                                 {...provider.droppableProps}
                            >
                                <div className="content-header">
                                    <img style={{cursor: "pointer"}} src={esc} alt="button toggle screen"/>
                                    <a href="https://littlealchemy.com/">Are you stuck? Need a hint?</a>
                                </div>
                                <div className="content-footer">
                                    <div className="result">
                                        <div>18/100</div>
                                    </div>
                                    <div className="list-icons">
                                        <img src={la2button} alt="la2button"/>
                                        <img src={clear} alt="clear"/>
                                        <img src={listicon} alt="listicon"/>
                                    </div>
                                </div>
                                {provider.placeholder}
                            </div>
                            <Menubar/>
                        </div>
                    )
                }
            </Droppable>

        )
    }
}

export default Content;