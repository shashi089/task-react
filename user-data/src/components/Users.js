import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  getData = async () => {
    try {
      const { data } = await axios.get(
        "https://611f263e9771bf001785c72a.mockapi.io/userdata"
      );
      this.setState({ users: data });
      console.log(this.state.users);
    } catch (err) {
      window.alert(err);
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        <div>
          <h1>User Data</h1>
          <table className="table table-striped table-bordered ">
            <thead className="bg-dark text-white">
              <tr>
                <th>S.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((val) => {
                return (
                  <>
                    <tr key={val.id}>
                      <td>{val.id}</td>
                      <td>{val.firstName}</td>
                      <td>{val.lastName}</td>
                      <td>{val.email}</td>
                      <td>{val.company}</td>
                      <td>{val.country}</td>
                      <td>{val.state}</td>
                      <td>{val.city}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Users;
