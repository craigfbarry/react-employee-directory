import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import API from "./utils/API";
import './App.css';


class App extends Component {

  state = {
    search: "",
    employees: []
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({search: event.target.value});
    //console.log(this.state.search)
  };


  filterEmployee = ()=> {
    const employees = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()));
    this.setState({ employees });
  }


  //Sort users by email address.
  sortEmployee = event => {
    event.preventDefault();
    console.log("try to sort")
      const employees = this.state.employees.sort(function(a,b){
      let nameA = a.email.toUpperCase(); // ignore upper and lowercase
      let nameB = b.email.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }    
      // names must be equal
      return 0;

    })
    this.setState({ employees });
  }

  render(){
      return(
          <Wrapper>
            <Title>Employee Directory</Title>
            
              <div className="container">
              <SearchForm
                handleInputChange={this.handleInputChange}
                filterEmployee={this.filterEmployee}            
              />              
              <Header
                sortEmployee={this.sortEmployee}
              />
              {this.state.employees.map((employee,i) => (
                <EmployeeCard
                  image={employee.picture.thumbnail}
                  firstName={employee.name.first}
                  surName={employee.name.last}
                  email={employee.email}
                  phone={employee.phone}
                  key={i}
                  />
              ))}
              </div>
          </Wrapper>
        );
    }
}

export default App;
