import React, { Component } from "react";
import ClientPopup from './Client-popup';
import '../../styles/clients/Client.css';

class Client extends Component {
    constructor() {
        super()
        this.state = {
            showPopup: false
        }
    }

    mailtype = ()=> {
        const emailType = this.props.client.emailType
        return (emailType ? emailType : "-")
    }

    didSold = ()=>{
        const sold = this.props.client.sold
        return (sold ? <p>&#9745;</p> : "-")
    }

    togglePopup = ()=> {
        this.setState({showPopup: !this.state.showPopup})
        console.log(this.state.showPopup)

      }

    render() {
        const client = this.props.client
        return (
            <tr className="clients-container">
                <td><button className="popup-button" onClick={this.togglePopup}>Edit</button>{client.name.split(" ")[0]}</td>
                <td>{client.name.split(" ")[1]}</td>
                <td>{client.country}</td>
                <td>{client.firstContact.slice(0,10)}</td>
                <td>{this.mailtype()}</td>
                <td>{this.didSold()}</td>
                <td>{client.owner}</td>
                {this.state.showPopup ? <ClientPopup togglePopup={this.togglePopup} client={client} updateClient={this.props.updateClient} /> : null}
            </tr>
        )
    }
}

export default Client;