import React, { Component } from "react";
import '../../styles/actions/Update.css';

class Update extends Component {
    constructor() {
        super()
        this.state = {
            clientName: "",
            ownerName: "",
            emailType: ""
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    transferOwner = () => {
        let clientName = this.state.clientName
        let ownerName = this.state.ownerName
        this.props.transferOwner(clientName, ownerName)
    }

    sendEmail = () => {
        let clientName = this.state.clientName
        let emailType = this.state.emailType
        this.props.sendEmail(clientName, emailType)
    }

    declareSale = () => {
        let clientName = this.state.clientName
        if (this.props.clients.sold === true) {
            alert ("Already sold")
        } else {
            this.props.declareSale(clientName)
        }
    }

    render() {
        const clients = this.props.clients
        console.log(this.state)
        return (
            <div className="update">
                <h4>UPDATE</h4>
                <div>
                    <span className="client-span">
                        Client: <input list="clients" value={this.state.clientName} name="clientName" placeholder="Client Name" onChange={this.inputChange} className="actions-input" />
                        <datalist id="clients">
                            {clients.map(client => {
                                return <option key={client._id} value={client.name} />
                            }
                            )}
                        </datalist>
                    </span>
                </div>
                <div>
                    Transfer ownership to
                <select name="ownerName" onChange={this.inputChange} id="actions-select1">
                        <option>Owner</option>
                        <option value="Emily Durham">Emily Durham</option>
                        <option value="Janice Alvarado">Janice Alvarado</option>
                        <option value="Leila Howe">Leila Howe</option>
                        <option value="Hull Conrad">Hull Conrad</option>
                        <option value="Martin Massey">Martin Massey</option>
                        <option value="Shepherd Stone">Shepherd Stone</option>
                        <option value="Barton Ramirez">Barton Ramirez</option>
                    </select>
                    <input type="button" id="actions-button1" onClick={this.transferOwner} value="TRANSFER" />
                </div>
                <div>
                    Send email:
                <select id="actions-select2" name="emailType" onChange={this.inputChange} >
                        <option>Email Type</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <input type="button" id="actions-button2" onClick={this.sendEmail} value="SEND" />
                </div>
                <div>
                    Declare sale!
                <input type="button" id="actions-button3" onClick={this.declareSale} value="DECLARE" />
                </div>
            </div>
        )
    }
}

export default Update;