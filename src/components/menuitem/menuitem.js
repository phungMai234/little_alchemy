import React from "react";
import "./menuitem.css";
import {Draggable} from "react-beautiful-dnd";

function Menuitem(props) {
    return (
        <Draggable draggableId={props.item.id} index={props.index}>
            {
                (provider) => (
                    <div className="element"
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                        ref={provider.innerRef}
                    >
                        <img className="element-img" src={props.item.img} alt={props.item.name}/>
                        <div className="element-name">{props.item.name}</div>
                    </div>)
            }
        </Draggable>

    )
}

export default Menuitem;