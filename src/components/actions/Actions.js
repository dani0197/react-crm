import React, { Component } from "react";
import Update from './Update';
import AddClient from './Add-client';
import '../../styles/actions/Actions.css';

class Actions extends Component {

    render() {
        return (
            <div className="actions">
                <Update />
                <hr/>
                <AddClient />
            </div>
        )
    }
}

export default Actions;