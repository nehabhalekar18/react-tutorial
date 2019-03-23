import React, { Component } from "react";
import Contact from "./components/Contacts";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manger" />
        <Contact
          name="Joe Doe"
          email="joe.doe@gmail.com"
          phone="555-555-5555"
        />
        <Contact
          name="Karen Smith"
          email="ksmith@gmail.com"
          phone="555-555-5555"
        />
      </div>
    );
  }
}

export default App;
