import React from "react";
import "./menuitem.css";
import {Draggable} from "react-beautiful-dnd";

class Menuitem extends React.Component {
    render() {
        return (
            <Draggable key={this.props.item.id} draggableId={this.props.item.id} index={this.props.index}>
                {
                    (provided, snapshot) => {
                        const style = {
                            display: snapshot.isDragging ? 'block' : 'flex',
                            width: snapshot.isDragging ? '100px' : '74px',
                            ...provided.draggableProps.style,
                        };
                        const styleImg = {
                            width: snapshot.isDragging ? '74px' : '53px',
                            height: snapshot.isDragging ? '74px' : '50px',
                        };

                        return (
                            <React.Fragment>
                                <div className="element"
                                     ref={provided.innerRef}
                                     {...provided.draggableProps}
                                     {...provided.dragHandleProps}
                                     style={style}
                                >
                                    <img className="element-img" style={styleImg} src={this.props.item.img}
                                         alt={this.props.item.name}/>
                                    <div className="element-name">{this.props.item.name}</div>
                                </div>

                                {snapshot.isDragging &&
                                (<div className="element-clone">
                                    <img className="element-img" src={this.props.item.img} alt={this.props.item.name}/>
                                    <div className="element-name"> {this.props.item.name}</div>
                                </div>)}
                            </React.Fragment>)

                    }
                }
            </Draggable>
        )
    }


}

export default Menuitem;