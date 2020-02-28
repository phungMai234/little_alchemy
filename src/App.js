import React from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import {DragDropContext} from "react-beautiful-dnd";
import Content from "./components/content/content";
import Menubar from "./components/menubar/menubar";
import {INIT_ITEMS, ITEMS} from "./config/intitalData";
import {v4 as uuidv4} from 'uuid';

const reorder = (list, startIndex, endIndex) => {

    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const copy = (source, destination, droppableSource, droppableDestination) => {

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, {...item, id: uuidv4()});
    return destClone;
};
const remove = (listItems, index, newItem)=>
{
    const result = Array.from(listItems);
    if(newItem)
        result.splice(index, 1, newItem);
    else
        result.splice(index, 1);
    return result;
}
const removeAndAddNew =(list, indexItemOn, idItemBelow, newItem) =>{

    const result = Array.from(list);

    if(!indexItemOn)
    {
        let newIndexItemBelow = result.findIndex(e => e.id === idItemBelow);
        result.splice(newIndexItemBelow, 1, {...newItem, id: uuidv4()})
        return result;
    }
    else {
        result.splice(indexItemOn, 1);
        let newIndexItemBelow = result.findIndex(e => e.id === idItemBelow);
        result.splice(newIndexItemBelow, 1, {...newItem, id: uuidv4()})

        return result;
    }
}

const matchElementInsideContent = (listItems, idItemOn, idItemBelow, indexItemOn) =>{

    const tmpList = Array.from(listItems);

    let eleOn = tmpList.find(e => e.id === idItemOn);
    let nameEleOn = eleOn.name;

    let eleBelow = tmpList.find(e => e.id === idItemBelow);
    let nameEleBelow = eleBelow.name;


    const tmp = ITEMS.filter(e => e.e1 === nameEleOn || e.e2 === nameEleOn );
    const newItem = Array.from(tmp).find(e => e.e1 === nameEleBelow || e.e2 === nameEleBelow );


    if(newItem)
    {
        const checkExist = INIT_ITEMS.find(e => e.name === newItem.name);
        if(!checkExist)
            INIT_ITEMS.push({...newItem, id: uuidv4()});

        return removeAndAddNew(tmpList, indexItemOn, idItemBelow, newItem);
    }
    else
        return tmpList;
}
const matchElementFromMenubar = (list, idItemOn, idItemBelow) =>{

    const itemOn = INIT_ITEMS.find((e, index) => index === idItemOn);
    let nameEleOn = itemOn.name;

    let eleBelow = list.find(e => e.id === idItemBelow);
    let nameEleBelow = eleBelow.name;

    const tmp = ITEMS.filter(e => e.e1 === nameEleOn || e.e2 === nameEleOn );
    const newItem = Array.from(tmp).find(e => e.e1 === nameEleBelow || e.e2 === nameEleBelow );

    if(newItem)
    {
        const checkExist = INIT_ITEMS.find(e => e.name === newItem.name);
        if(!checkExist)
            INIT_ITEMS.push({...newItem, id: uuidv4()});
        return removeAndAddNew(list, null, idItemBelow, newItem);
    }
    else
    {
        const result = Array.from(list);
        result.push({...itemOn, id: uuidv4()})
        return result;
    }
}
class App extends React.Component {
    state = {
        listItems: []
    };

    onDragEnd = result => {
        console.log("result",result)
        const {destination, source, combine, draggableId} = result;

        if(combine)
        {
            if(source.droppableId === "ITEMS")
            {
                this.setState({
                    listItems: matchElementFromMenubar(
                        this.state.listItems,
                        source.index,
                        combine.draggableId,
                        source
                    )})

            }
            else {
                this.setState({
                    listItems: matchElementInsideContent(
                        this.state.listItems,
                        draggableId,
                        combine.draggableId,
                        source.index
                    )});

            }
            return;
        }

        if(source.droppableId === "CONTENT" && destination.droppableId ==="CONTENT")
        {
            this.setState({
                listItems: reorder(
                    this.state.listItems,
                    source.index,
                    destination.index
                )
            });
        }
        if(source.droppableId === "ITEMS" && destination.droppableId ==="CONTENT")
        {
            this.setState({
                listItems: copy(
                    INIT_ITEMS,
                    this.state.listItems,
                    source,
                    destination
                )
            });
        }
        if(source.droppableId === "CONTENT" && destination.droppableId ==="ITEMS")
        {
            this.setState({
                listItems: remove(
                    this.state.listItems,
                    source.index
                )
            })
        }
    };

    render() {

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="container-alchemy">
                    <Content items={this.state.listItems}/>
                    <Menubar/>
                </div>
            </DragDropContext>
        );
    }


}

export default App;
