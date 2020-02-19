import React from "react";
import "./menubar.css"

import Menuitem from "../menuitem/menuitem";

import {listAlpha, listItem} from "../../config/intitalData";

class Menubar extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            listAlpha: listAlpha,
            listItem:listItem
        }
    }
    render() {
        return (
            <div className="container-menubar">
                <div className="menubar-left">
                    {
                        this.state.listAlpha.map((e, index)=>{
                            return <div key={e.id} className="alpha-item" >{e.toUpperCase()}</div>
                        })
                    }
                </div>

                <div className="menubar-right">
                    {
                        this.state.listItem.map((e, index) => {
                            return <Menuitem key={e.id} item={e} index={index}/>
                        })
                    }
                </div>
            </div>)
    }
}

export default Menubar;