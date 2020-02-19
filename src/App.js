import React from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import {DragDropContext} from "react-beautiful-dnd";
import Content from "./components/content/content";
import Menubar from "./components/menubar/menubar";

function App(){
    const onDragEnd = (result) => {
        console.log(result);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {
                () => {
                    return(
                    <div className="container">
                        <Content/>
                    </div>);
                }
            }

        </DragDropContext>
    );
}

export default App;
