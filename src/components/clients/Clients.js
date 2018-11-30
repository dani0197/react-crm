import React, { Component } from "react";
import axios from 'axios';
import Client from './Client';
import ClientsHeader from './Clients-header';
import Loader from '../clients/Loader';
import '../../styles/clients/Clients.css';
import '../../styles/clients/ClientsHeader.css';
import '../../styles/clients/Loader.css';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            loader: true
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3030/clients').then((response) => {
            this.setState({
                clients: response.data,
                loader: false
            })
        })
    }

    updateClient = (id, name, surName, country) => {
        let myClient;
        let updatedClients = this.state.clients.map(client => {
            if (client._id === id) {
                let newClient = { ...client };
                newClient.name = name + " " + surName;
                newClient.country = country;
                myClient = newClient
                console.log(myClient)
                return newClient;
            }
            return client;
        })
        axios.post('http://localhost:3030/clients', myClient).then(()=> {
            this.setState({
                clients: updatedClients
            })
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
                            {this.state.loader ? <Loader /> : null}
            </div>
        )
    }
}

export default Clients;