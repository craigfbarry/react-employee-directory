import React, { Component } from "react";
import API from "../../utils/API";


function EmployeeCard(props){

    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <ul>
                <li>
                    <strong>Name:</strong> {props.firstName}
                </li>
                <li>
                    <strong>Surname:</strong> {props.surName}
                </li>
                <li>
                    <strong>Email:</strong> {props.email}
                </li>
                <li>
                    <strong>Phone:</strong> {props.phone}
                </li>
            </ul>
            
        </div>
    )
}


export default EmployeeCard;