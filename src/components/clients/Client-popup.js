import React, { Component } from "react";
import '../../styles/clients/Client-popup.css'
class ClientPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.client.name.split(" ")[0],
            surName: props.client.name.split(" ")[1],
            country: props.client.country
        }
    }

    inputChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateClient = ()=> {
        let name = this.state.name
        let surName = this.state.surName
        let country = this.state.country
        let id = this.props.client._id
        this.props.updateClient(id, name, surName, country)
        this.props.togglePopup()
    }

    render() {
        console.log(this.state.name)
        return (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-button" type="button" onClick={this.props.togglePopup}>X</button>
                    <h3>edit info </h3>
                   <p> Name: <input type="text" name="name" value={this.state.name} onChange={this.inputChange}/></p>
                    <p>Surname: <input type="text" name="surName" value={this.state.surName} onChange={this.inputChange} /></p>
                    <p>Country: <input type="text" name="country" value={this.state.country} onChange={this.inputChange} /></p>
                    <button className="popup-update" type="button" onClick={this.updateClient}>Update</button>
                </div>
            </div>
        )
    }   
}

export default ClientPopup;