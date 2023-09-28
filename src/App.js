import React, { useState } from "react";

const BACCalculator = () => {
  const [bottles, setBottles] = useState(0);
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [bac, setBAC] = useState(null);

  const calculateBAC = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    const bacFormula = gender === "male" ? gramsLeft / (weight * 0.7) : gramsLeft / (weight * 0.6);

    setBAC(bacFormula.toFixed(2));
  };

  return (
    <div>
      <h1>Blood Alcohol Content (BAC) Calculator</h1>
      <div>
        <label htmlFor="bottles">Number of Bottles:</label>
        <input
          type="number"
          id="bottles"
          value={bottles}
          onChange={(e) => setBottles(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Time Since Drinking (hours):</label>
        <input
          type="number"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button onClick={calculateBAC}>Calculate BAC</button>
      {bac !== null && <p>Your BAC is: {bac}</p>}
    </div>
  );
};

export default BACCalculator;
