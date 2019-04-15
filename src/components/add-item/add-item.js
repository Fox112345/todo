import React, { Component } from 'react'

import './add-item.css'

export default class AddItem extends Component {
    constructor(){
        super();
        
    }
    
    render(){
        const { addItem } = this.props;
        return(
            <div className="add-item">
                <button className="btn btn-outline-secondary"
                        onClick={()=>addItem("sdvfsdf")}
                        >Add item</button>
            </div>
        )
    }
}