import React, { Component } from "react";
import Update from './Update';
import AddClient from './Add-client';
import axios from 'axios'
import '../../styles/actions/Actions.css';

class Actions extends Component {
    constructor() {
        super()
        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3030/actions').then((response) => {
            this.setState({ clients: response.data }, () => {
            })
        })
    }

    transferOwner = (clientName, ownerName) => {
        if (clientName === "" || ownerName === "") {
            return alert("Please insert all details")
        } else {
            let clients = [...this.state.clients]
            let clientToUpdate = clients.find(c => c.name === clientName)
            clientToUpdate.owner = ownerName
            axios.post('http://localhost:3030/transfer', { clientToUpdate }).then(res => {
                console.log(res);
            })
            alert("Owner have been transfered")

        }
    }

    sendEmail = (clientName, emailType) => {
        if (clientName === "" || emailType === "" || emailType === "Email Type") {
            return alert("Please insert full details")
        } else {
            let clients = [...this.state.clients]
            let clientToUpdate = clients.find(c => c.name === clientName)
            clientToUpdate.emailType = emailType
            axios.post('http://localhost:3030/send', { clientToUpdate }).then(res => {
                console.log(res);
            })
            alert("Email have been sent")
        }
    }

    declareSale = (clientName) => {
        if (clientName === "") {
            return alert("Please insert full details")
        } else {
            let clients = [...this.state.clients]
            let clientToUpdate = clients.find(c => c.name === clientName)
            clientToUpdate.sold = true
            axios.post('http://localhost:3030/declare', { clientToUpdate }).then(res => {
                console.log(res);
            })
            alert("Sold!")
        }
    }

    addNewClient = (firstName, surName, country, owner) => {
        if (firstName === "" || surName === "" || country === "" || owner === "") {
            return alert("Please insert full details")
        } else {
            let NewClient = {
                country: country,
                email: "",
                emailType: "",
                firstContact: "",
                name: firstName + " " + surName,
                owner: owner,
                sold: false
            }
            axios.post('http://localhost:3030/newClient', { NewClient }).then(res => {
            })
            alert("Congratulations , you just added a new client !")
        }
    }

    render() {
        console.log(this.state.clients)
        return (
            <div className="actions">
                <Update 
                    clients={this.state.clients} 
                    transferOwner={this.transferOwner} 
                    sendEmail={this.sendEmail}
                    declareSale={this.declareSale}
                />
                <hr />
                <AddClient addNewClient={this.addNewClient} />
            </div>
        )
    }
}

export default Actions;