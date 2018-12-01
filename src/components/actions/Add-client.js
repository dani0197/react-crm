import React, { Component } from "react";
import '../../styles/actions/Add-client.css';

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            surName: "",
            country: "",
            owner: ""
        }
    }

    inputChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    addNewClient = () =>{
        let firstName = this.state.firstName
        let surName = this.state.surName
        let country = this.state.country
        let owner = this.state.owner
        this.props.addNewClient(firstName , surName , country , owner)
    }

    render(){
        return (
            <div className="add-client">
                <h4>ADD CLIENT</h4>
                    <div>First name: <input id="actions-input1" name="firstName" onChange={this.inputChange} type="text" /></div>
                    <div>Surname: <input id="actions-input2" name="surName" onChange={this.inputChange} type="text" /></div>
                    <div>Country: <input id="actions-input3" name="country" onChange={this.inputChange} type="text" /></div>
                    <div>Owner: <input id="actions-input4" name="owner" onChange={this.inputChange} type="text" /></div>
                    <div><input id="add-client-button" type="button" onClick={this.addNewClient} value="Add New Client" /> </div>
            </div>
        )
    }
}

export default AddClient;