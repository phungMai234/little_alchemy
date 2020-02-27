import React from "react";
import "./menubar.css"

import Menuitem from "../menuitem/menuitem";

import {listAlpha, initListItem} from "../../config/intitalData";
import {Droppable} from "react-beautiful-dnd";

class Menubar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listAlpha: listAlpha,
            listItem:initListItem
        }
    }

    render() {
        return (
            <Droppable droppableId="menubar" isDropDisabled={true}>
                {
                    (provided) => (
                        <div className="container-menubar"
                             {...provided.droppableProps}
                             ref={provided.innerRef}
                        >
                            <div className="menubar-left">
                                {
                                    this.state.listAlpha.map((e, index) => {
                                        return <div key={e.id} className="alpha-item">{e.toUpperCase()}</div>
                                    })
                                }
                            </div>
                            <div className="menubar-right">
                                {
                                    this.state.listItem.map((e, index) => {
                                        return <Menuitem key={e.id} item={e} index={index}/>
                                    })
                                }
                            </div>
                            {provided.placeholder}
                        </div>
                    )
                }

            </Droppable>
        )
    }
}

export default Menubar;