import React, { Component } from "react";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";
import { fetchSMURF } from "./actions/index";
import axios from "axios";
import { connect } from "react-redux";
import { fetchSmurfs, fetchSuccess } from "./actions/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount(props) {
    this.props.fetchSmurfs();
    axios
      .get("http://localhost:3333/smurfs")
      .then((resp) => {
        this.props.fetchSuccess(resp.data);
      })
      .catch((err) => console.log("Axios Error", err));
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs, fetchSuccess })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
