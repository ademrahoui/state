import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  constructor() {
    console.log("this is a constructor");
    super();
    this.state = {
      counter: 0,
      time: 0,
      intervall: null,
    };
  }

  //life cycle
  componentDidMount() {
    console.log("this is for the first render");
    this.setState({
      intervall: setInterval(
        () => this.setState({ time: this.state.time + 1 }),
        1000
      ),
    });
  }

  componentDidUpdate() {
    console.log("u did an upodate ");
    console.log(this.state.counter);
  }

  //function add +1
  incr = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  //function dec
  dec = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  res = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    console.log("this the render part ");
    return (
      <div className="counter">
        Counter
        <button className="incr-button" onClick={() => this.incr()}>
          +
        </button>
        <button className="dec-button" onClick={() => this.dec()}>
          --
        </button>
        <h1 className="counter-value">{this.state.counter}</h1>
        <button className="reset-button" onClick={() => this.res()}>
          reset
        </button>
        <h1 className="time-value">{this.state.time}</h1>
      </div>
    );
  }
}
