// Componente Termometro.js
import "./Thermometer.css";
import React, { Component } from "react";

class Thermometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const stemPerctStyle = {
      height: `${value}%`,
    };

    return (
      <div>
        <div className="thermometer">
          <div className="stem">
            <div className="stem-perct" style={stemPerctStyle}></div>
          </div>
          <div className="bulb"></div>
        </div>
        <input
          type="range"
          value={value}
          min="-10"
          max="100"
          onChange={this.handleChange}
        />
        <p>Temperatura: {this.state.value} C</p>
      </div>
    );
  }
}

export default Thermometer;