import React, { Component } from 'react';

class BACCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'male',
      bottles: 0,
      weight: 0,
      time: 0,
      result: null,
    };
  }

  calculateBAC = () => {
    const { gender, bottles, weight, time } = this.state;

    // Constants for calculations
    const liters = bottles * 0.33;
    const grams = liters * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;

    let result;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      result = gramsLeft / (weight * 0.6);
    }

    this.setState({ result });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { gender, bottles, weight, time, result } = this.state;

    return (
      <div>
        <h1>BAC Calculator</h1>
        <label>
          Select Gender:
          <select name="gender" value={gender} onChange={this.handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Number of Bottles:
          <input
            type="number"
            name="bottles"
            value={bottles}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Body Weight (kg):
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Time Since First Drink (hours):
          <input
            type="number"
            name="time"
            value={time}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button onClick={this.calculateBAC}>Calculate BAC</button>
        <p>
          {result !== null && `Estimated BAC: ${result.toFixed(4)}`}
        </p>
      </div>
    );
  }
}

export default BACCalculator;
