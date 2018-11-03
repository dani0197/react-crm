import React, { Component } from "react";
import '../../styles/clients/Client-popup.css'
class ClientPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.client.name.split(" ")[0],
            sureName: props.client.name.split(" ")[1],
            country: props.client.country
        }
    }

    nameInput = (e)=> {
        let inputValue = e.target.value
        this.setState({name: inputValue})
        console.log(this.state.name)
    }

    sureNameInput = (e)=> {
        let inputValue = e.target.value
        this.setState({sureName: inputValue})
    }

    countryInput = (e)=> {
        let inputValue = e.target.value
        this.setState({country: inputValue})
    }

    updateClient = ()=> {
        let name = this.state.name
        let surName = this.state.sureName
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
                   <p> Name: <input type="text" value={this.state.name} onChange={this.nameInput}/></p>
                    <p>Surname: <input type="text" value={this.state.sureName} onChange={this.sureNameInput} /></p>
                    <p>Country: <input type="text" value={this.state.country} onChange={this.countryInput} /></p>
                    <button className="popup-update" type="button" onClick={this.updateClient}>Update</button>
                </div>
            </div>
        )
    }   
}

export default ClientPopup;