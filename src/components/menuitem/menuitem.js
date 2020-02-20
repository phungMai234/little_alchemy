import React from "react";
import "./menuitem.css";
import {Draggable} from "react-beautiful-dnd";

class Menuitem extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.item.id} index={this.props.index}>
                {
                    (provided, snapshot) => {
                        const style = {
                            display: snapshot.isDragging ? 'block' : 'flex',
                            ...provided.draggableProps.style,
                        };
                        const styleImg = {
                            width: snapshot.isDragging ? '74px' : '53px',
                            height: snapshot.isDragging ? '74px' : '50px',
                            alignItems: snapshot.isDragging ? 'center' : '',

                        }
                        const styleDiv={
                            alignItems: snapshot.isDragging ? 'center' : 'center',
                        }
                        return (
                            <div className="element"
                                 ref={provided.innerRef}
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}
                                 style={style}
                            >
                                <img className="element-img" style={styleImg} src={this.props.item.img} alt={this.props.item.name}/>
                                <div className="element-name" style={styleDiv}>{this.props.item.name}</div>
                            </div>)
                    }
                }
            </Draggable>
        )
    }


}

export default Menuitem;