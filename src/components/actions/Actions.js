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
        axios.get('http://localhost:3030/actions').then((response)=> {
            this.setState({clients: response.data }, ()=> {
                // console.log(this.state.clients)
            })
        })
    }

    changeOwner= (clientName, newOwner)=>{
        axios.post('http://localhost:3030/actions/' + clientName, {newOwner}).then((owner)=> {
            this.setState({

            })
        })
    }

    render() {
        console.log(this.state.clients)
        return (
            <div className="actions">
                <Update clients={this.state.clients} changeOwner={this.changeOwner} />
                <hr/>
                <AddClient />
            </div>
        )
    }
}

export default Actions;