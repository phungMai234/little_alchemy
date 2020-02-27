import React from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import {DragDropContext} from "react-beautiful-dnd";
import Content from "./components/content/content";
import Menubar from "./components/menubar/menubar";
import {initListItem} from "./config/intitalData";
class App extends React.Component {
    state = {
        listItem: initListItem,
        listItemContent:[],
        totalCurrentItem:initListItem.length,
        totalItem: 589,
        left:"",
        top:""
    };
    showCoords = (event) =>{
        let  left = event.clientX;
        let  top = event.clientY;
        this.setState({
           left:left,
            top:top
        })
    }
    onDragEnd = result => {

        const {destination, source, draggableId, combine} = result;

        if(combine)
        {
            const newList = this.state.listItemContent;
            newList.splice(source.index, 1);
            this.setState({
                listItemContent: newList
            })
            return;
        }

        if(!destination)
            return;

        if(destination.droppableId === source.droppableId && destination.droppableId !=="content")
        {
            console.log("ec")
            return;
        }
        const newItem = this.state.listItem.find(e => e.id=== draggableId);

        newItem.left = this.state.left;
        newItem.top = this.state.top;
        console.log(newItem)
        const newList = this.state.listItemContent;
        newList.push(newItem);

        this.setState({
            listItemContent: newList
        })

    };

    render() {

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="container-alchemy" onMouseUp={this.showCoords}>
                    <Content content={this.state}/>
                    <Menubar/>

                </div>
            </DragDropContext>
        );
    }


}

export default App;
