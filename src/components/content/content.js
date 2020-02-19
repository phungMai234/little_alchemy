import React from "react";
import "../panel/panel.css";
import {Droppable} from "react-beautiful-dnd";
import Menubar from "../menubar/menubar";
import Panel from "../panel/panel";

class Content extends React.Component {
    state = {
        contentId: "content-1"
    };

    render() {
        return (
            <Droppable droppableId={this.state.contentId}>
                {(provider)=>(
                    <div {...provider.droppableProps} ref={provider.innerRef}>
                        <Panel/>
                        <Menubar/>
                        {provider.placeholder}
                    </div>
                )}
            </Droppable>

        );
    }
}

export default Content;