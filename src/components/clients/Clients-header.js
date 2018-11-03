import React, { Component } from "react";

class ClientsHeader extends Component {

    render(){
        return (
            <tr className="clients-header">
                <th> Name </th>
                <th> Surname </th>
                <th> Country </th>
                <th> First Contact </th>
                <th> Email type </th>
                <th> Sold </th>
                <th> Owner </th>
            </tr>
        )
    }
}

export default ClientsHeader;