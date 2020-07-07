import React from "react";
import "./style.css";

function Header(props) {
  return (
    
    <div className="row">
    <div className="col-1">
    </div>
    <h5 className="col-4"> Name
    </h5>
    <div className="col-5">
    <h5 >
        Email
        <button type="submit" onClick={props.sortEmployee} className="sort btn btn-success float-right">
                     sort
        </button>
    </h5>
    </div>
    <h5 className="col-2">
        Phone
    </h5>       
    </div>



  )
}

export default Header;