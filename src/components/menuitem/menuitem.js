import React from "react";
import "./menuitem.css";
import {Draggable} from "react-beautiful-dnd";

class Menuitem extends React.Component{
    render() {
        return (
            <Draggable draggableId={this.props.item.id} index={this.props.index}>
                {(provider) =>
                    (<div className="element"
                          ref={provider.innerRef}
                          {...provider.draggableProps}
                          {...provider.dragHandleProps}>
                        <img className="element-img" src={this.props.item.img} alt={this.props.item.name}/>
                        <div className="element-name">{this.props.item.name}</div>
                    </div>)}
            </Draggable>
        )
    }


}

export default Menuitem;