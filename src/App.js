import React from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import {DragDropContext} from "react-beautiful-dnd";
import Content from "./components/content/content";
import Menubar from "./components/menubar/menubar";
import {listItem} from "./config/intitalData";

class App extends React.Component {
    state = {
        listItem: listItem,
        listItemContent:[]
    };

    onDragEnd = result => {
        console.log(result);
        const {destination, source, draggableId} = result;
        if(!destination)
            return;

        if(destination.droppableId === source.droppableId
            && destination.index === source.index
        )
        {
            return;
        }
        const newItem = this.state.listItem.find(e => e.id=== draggableId);
        let newList = this.state.listItemContent.push(newItem);
        newList = Array.from(newList);
        this.setState({

            listItemContent: newList
        })
        console.log(this.state.listItemContent);
    };


    render() {
        console.log(this.state.listItemContent);
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="container-alchemy">
                    <Content listItemContent={this.state.listItemContent}/>
                    <Menubar/>
                </div>
            </DragDropContext>
        );
    }


}

export default App;
