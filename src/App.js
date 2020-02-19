import React from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import {DragDropContext} from "react-beautiful-dnd";
import Content from "./components/content/content";

class App extends React.Component{
    onDragEnd = result =>{
        console.log(result);
    }
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Content/>
            </DragDropContext>

        );
    }


}

export default App;
