import React from "react";
import "./style.css";

function Header(props) {
  return (
    
    <div className="row">
    <div className="col-1"></div>
    <h6 className="col-4 pt-2"> Name
    </h6>
    <h6 className="col-5 pt-2">
        Email
    </h6>
    <h6 className="col-2 pt-2">
        Phone
    </h6>       
    </div>



  )
}

export default Header;