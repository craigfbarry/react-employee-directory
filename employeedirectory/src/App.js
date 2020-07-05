import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import API from "./utils/API";
import './App.css';


class App extends Component {

  state = {
    employees: []
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  filterEmployee = email =>{
    const employees = this.state.employees.filter(employee => employee.email == email);
    this.setState({ employees });
  }






  render(){
      return(
          <Wrapper>
            <Title>Employee Directory</Title>
            
              <div className="container">
              <Header></Header>
              {this.state.employees.map(employee => (
                <EmployeeCard
                  filterEmployee={this.filterEmployee}
                  image={employee.picture.thumbnail}
                  firstName={employee.name.first}
                  surName={employee.name.last}
                  email={employee.email}
                  phone={employee.phone}
                  />
              ))}
              </div>
          </Wrapper>
        );
    }
}

export default App;
