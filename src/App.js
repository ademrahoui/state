import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  togel = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="app">
        <button className="show-button" onClick={() => this.togel()}>
          show
        </button>
        {this.state.show && <Counter />}
      </div>
    );
  }
}

export default App;
