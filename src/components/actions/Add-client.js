import React, { Component } from "react";
import '../../styles/actions/Add-client.css';

class AddClient extends Component {

    render(){
        return (
            <div className="add-client">
                <h4>ADD CLIENT</h4>
                    <div>First name: <input type="text" id="actions-input1" /></div>
                    <div>Surname: <input id="actions-input2" type="text" /></div>
                    <div>Country: <input id="actions-input3" type="text" /></div>
                    <div>Owner: <input id="actions-input4" type="text" /></div>
            </div>
        )
    }
}

export default AddClient;