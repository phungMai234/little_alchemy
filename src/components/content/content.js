import React from "react";
import "./content.css";
import esc from "./icons/escape.png";
import la2button from "./icons/la2button.png";
import clear from "./icons/clear.png";
import listicon from "./icons/listicon.png";
import {Droppable} from "react-beautiful-dnd";
import Item from "../item/item";

class Content extends React.Component {


    render() {
        return (
            <Droppable droppableId="content" isCombineEnabled={true}>
                {
                    (provided, snapshot) => {
                        return(
                        <div className="container-content"

                             {...provided.droppableProps}
                             ref={provided.innerRef}
                        >
                            <div className="content-header">
                                <img style={{cursor: "pointer"}} src={esc} alt="button toggle screen"/>
                                <a href="https://littlealchemy.com/">Are you stuck? Need a hint?</a>
                            </div>
                            <div className="body-content" >
                                {
                                    this.props.content.listItemContent.map((e, index) => {
                                        return <Item key={e.id} item={e} index={index}/>
                                    })
                                }
                            </div>
                            <div className="content-footer">
                                <div className="result">
                                    <div>{this.props.content.totalCurrentItem}/{this.props.content.totalItem}</div>
                                </div>
                                <div className="list-icons">
                                    <img src={la2button} alt="la2button"/>
                                    <img src={clear} alt="clear"/>
                                    <img src={listicon} alt="listicon"/>
                                </div>
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                }
            </Droppable>

        );
    }
}

export default Content;