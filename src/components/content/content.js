import React from "react";
import "./content.css";
import fullscreen from "./icons/fullscreen.png";
import esc from  "./icons/esc.png"
import la2button from "./icons/la2button.png";
import clear from "./icons/clear.png";
import listicon from "./icons/listicon.png";
import {Droppable} from "react-beautiful-dnd";
import Item from "../item/item";

class Content extends React.Component {
    state={
        checkFullScreen: false
    }
    clearAllItem = () => {

    };
    fullScreen = () => {
        let elem = document.getElementById("root");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
        this.setState({checkFullScreen:true})
    };
    closeFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
        this.setState({checkFullScreen:false})

    };
    noti = () =>{
        alert("Tam thoi chua phat trien chuc nang nay")
    }
    render() {
        return (
            <Droppable
                droppableId="CONTENT"
                isCombineEnabled={true}
            >
                {
                    (provided) => {
                        return (
                            <div className="container-content"

                                 {...provided.droppableProps}
                                 ref={provided.innerRef}
                            >
                                <div className="content-header">
                                    {
                                        !this.state.checkFullScreen ?
                                            (<img onClick={this.fullScreen} style={{cursor: "pointer"}} src={fullscreen}
                                                  alt="button full screen"/>)
                                            : (<img onClick={this.closeFullscreen} style={{cursor: "pointer"}} src={esc}
                                                    alt="button close full screen"/>)
                                    }
                                    <a href="https://littlealchemy.com/">Are you stuck? Need a hint?</a>
                                </div>
                                <div className="body-content">
                                    {
                                        this.props.items.map((e, index) => {
                                            return <Item key={e.id} item={e} index={index}/>
                                        })
                                    }
                                </div>
                                <div className="content-footer">
                                    <div className="result">
                                        <div>/</div>
                                    </div>
                                    <div className="list-icons">
                                        <a href="https://littlealchemy2.com/" target="_blank">
                                            <img src={la2button} alt="la2button"/>
                                        </a>

                                        <img src={clear} onClick={this.clearAllItem} alt="clear"/>
                                        <img src={listicon} onClick={this.noti} alt="listicon"/>
                                    </div>
                                </div>
                                {provided.placeholder}
                            </div>
                        )
                    }
                }
            </Droppable>

        );
    }
}

export default Content;