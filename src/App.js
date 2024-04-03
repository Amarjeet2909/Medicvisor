import React, { Component, Fragment } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "./App.css";
import "./components/Styles/Navbar.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Fragment>
          <Navbar />
          <Home />
          <Footer />
        </Fragment>
      </HashRouter>
    );
  }
}

export default App;