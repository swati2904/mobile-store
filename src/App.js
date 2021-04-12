import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Deatils";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Deatils from "./components/Deatils";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Deatils} />
          <Route path="/Cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
