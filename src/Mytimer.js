import React, { Component } from "react";

class Mytimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compteur: 0
    };
  }
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  tick() {
    this.setState({
      compteur: this.state.compteur + 1
    });
    console.log("un update à eu lieu");
  }
  render() {
    return (
      <div>
        <h1>My Timer : {this.state.compteur}</h1>
      </div>
    );
  }
}

export default Mytimer;
