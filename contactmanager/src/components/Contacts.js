import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email : {email}</li>
          <li>Phone no. : {phone}</li>
        </ul>
      </div>
    );
  }
}
