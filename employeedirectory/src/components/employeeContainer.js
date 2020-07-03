import React, from "react";
import API from "../utils/API";




searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

render() {
    return(
        <Container>

        </Container>
    );
}

export default employeeContainer;