import React from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import {DragDropContext} from "react-beautiful-dnd";
import Content from "./components/content/content";
import Menubar from "./components/menubar/menubar";
import {INIT_ITEMS} from "./config/intitalData";
import {v4 as uuidv4} from 'uuid';

/*const reorder = (list, startIndex, endIndex) => {
    console.log("reorder");
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};*/
const move = (list, idItem, top, left) => {
    const item = list.find((e) => e.id = idItem);
    item.top = top;
    item.left = left;

    return list;
};

const copy = (source, destination, droppableSource, droppableDestination, top, left) => {
    console.log('dest:', destination);

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];
    item.top = top;
    item.left = left;

    destClone.splice(droppableDestination.index, 0, {...item, id: uuidv4()});
    return destClone;
};

class App extends React.Component {
    state = {
        listItems: []
    };
    showCoords = (event) => {
        let left = event.clientX;
        let top = event.clientY;
        this.setState({
            left: left,
            top: top
        })
    };

    onDragEnd = result => {
        console.log(result);
        const {destination, source, combine} = result;

        /*if(combine)
        {
            const newList = this.state.listItemContent;
            newList.splice(source.index, 1);
            this.setState({
                listItemContent: newList
            })
            return;
        }*/

        if (!destination)
            return;

        switch (source.droppableId) {
            case "CONTENT":
                this.setState({
                    listItems: move(
                        this.state.listItems,
                        result.draggableId,
                        this.state.top,
                        this.state.left
                    )
                });
                break;
            case 'ITEMS':
                this.setState({
                    listItems: copy(
                        INIT_ITEMS,
                        this.state.listItems,
                        source,
                        destination,
                        this.state.top,
                        this.state.left
                    )
                });
                break;

            default:
                console.log("default");
                break;
        }

    };

    render() {

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="container-alchemy" onMouseUp={this.showCoords}>
                    <Content items={this.state.listItems}/>
                    <Menubar/>
                </div>
            </DragDropContext>
        );
    }


}

export default App;
