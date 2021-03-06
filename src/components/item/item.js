import React from "react";
import "./item.css"
import {Draggable} from "react-beautiful-dnd";

function Item(props) {
    return (
        <Draggable
            draggableId={props.item.id}
            index={props.index}
            key={props.index}
        >
            {
                (provided) => {
                    return (
                        <div className="item"
                             {...provided.draggableProps}
                             {...provided.dragHandleProps}
                             ref={provided.innerRef}
                        >
                            <img className="item-img" src={props.item.img} alt={props.item.name}/>
                            <div className="item-name">{props.item.name}</div>
                        </div>
                    );
                }
            }
        </Draggable>
    );

}

export default Item