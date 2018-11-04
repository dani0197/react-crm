import React, { Component } from "react";
import '../../styles/actions/Update.css';

class Update extends Component {
    constructor() {
        super()
        this.state = {
            clientName: ""
        }
    }

    nameInput = (e)=> {
        let inputValue = e.target.value
        this.setState({clientName: inputValue})
    }

    render() {
        return (
            <div className="update">
                <h4>UPDATE</h4>
                <div>
                    <span className="client-span">
                    Client: <input type="text" onChange={this.nameInput} className="actions-input" placeholder="Client Name" />
                    </span>
                </div>
                <div>
                    Transfer ownership to
                <select id="actions-select1">
                        <option value="owner">Owner</option>
                    </select>
                    <input type="button" id="actions-button1" value="TRANSFER" />
                </div>
                <div>
                    Send email:
                <select id="actions-select2">
                        <option value="Email Type">Email Type</option>
                    </select>
                    <input type="button" id="actions-button2" value="SEND" />
                </div>
                <div>
                    Declare sale!
                <input type="button" id="actions-button3" value="DECLARE" />
                </div>
            </div>
        )
    }
}

export default Update;