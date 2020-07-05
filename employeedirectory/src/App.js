import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import './App.css';


class App extends Component {

  state = {
    employees
  };

  render(){
      return(
          <Wrapper>
            <Title>Employee Directory</Title>
              {this.state.employees.map(employee => (
                <EmployeeCard
                  image={employee.picture.thumbnail}
                  firstName={employee.name.first}
                  surName={employee.name.last}
                  email={employee.email}
                  phone={employee.phone}
                />
              ))}
          </Wrapper>
        );
    }
}

export default App;
