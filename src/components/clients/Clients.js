import React, { Component } from "react";
import Client from './Client';
import ClientsHeader from './Clients-header';
import '../../styles/clients/Clients.css';
import '../../styles/clients/ClientsHeader.css';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            let data = require('../../data.json')
                this.setState({ clients: data })
        }, 100)
    }

    updateClient=(id, name, surName, country) =>{
        let updatedClients = this.state.clients.map(client=> {
            if(client._id === id){
               let newClient = {...client};
               newClient.name = name + " " + surName;
                newClient.country = country;
                return newClient;
            }
            return client;
        })

        this.setState({
            clients: updatedClients
        })

         
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search" />
                <select>
                    <option value="sold">Sold</option>
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="owner">Owner</option>
                    <option value="country">Country</option>
                </select>
                <table>
                    <tbody>
                        <ClientsHeader />
                        {this.state.clients.map(client =>
                        <Client
                            client={client}
                            key={client._id}
                            updateClient={this.updateClient} 
                        />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Clients;