import React from "react";
//import API from "../../utils/API";


function EmployeeCard(props){

    return (        
        <div className="card my-1">
            <div className="row">
                <div className="img-container col-1">
                    <img alt={props.name} src={props.image} />
                </div>                
                <div className="col-4 pt-2">
                    {props.firstName} {props.surName}
                 </div>
                <div className="col-5 pt-2">
                    {props.email} 
                    <button onClick={() => props.filterEmployee(props.email)} className="filter">
                     filter
                    </button>
                </div>
                <div className="col-2 pt-2">
                    {props.phone}    
                </div>       
            </div>
        </div>
    )
}


export default EmployeeCard;