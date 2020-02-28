import React from "react";
import "./menubar.css"

import Menuitem from "../menuitem/menuitem";

import {ALPHABETS, INIT_ITEMS} from "../../config/intitalData";
import {Droppable} from "react-beautiful-dnd";

class Menubar extends React.Component {
    render() {
        return (
            <Droppable droppableId="ITEMS">
                {
                    (provided) => (
                        <div className="container-menubar"
                             {...provided.droppableProps}
                             ref={provided.innerRef}
                        >
                            <div className="menubar-left">
                                {
                                    ALPHABETS.map((e, index) => {
                                        return <div key={index} className="alpha-item">{e.toUpperCase()}</div>
                                    })
                                }
                            </div>
                            <div className="menubar-right">
                                {
                                    INIT_ITEMS.map((e, index) => {
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