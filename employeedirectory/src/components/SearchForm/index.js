import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
    <div className="form-group">
        <input
        value={props.search}
        onChange={props.handleInputChange}
        name="employee"
        type="text"
        className="form-control"
        placeholder="search Employees"
        id="employee"
        />
    </div>
  </form>
  )
}

export default SearchForm;