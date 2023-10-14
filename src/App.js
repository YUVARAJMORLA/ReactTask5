import React, { useState } from 'react';
import "./App.css"
function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageDiff = today - birthDate;
    const ageDate = new Date(ageDiff);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(years);
  };

  return (
    <div className="age-calculator">
      <h1 className="center">Age Calculator</h1>
      <div><h4>Enter your date of birth:</h4></div>
      <input className="content"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      /><br></br>
      <br></br>
      <button id ="b1" onClick={calculateAge}>Calculate Age</button>
      <div id="a1">{age !== null && <p>You are {age} years old.</p>}</div>
    </div>
  );
}

export default AgeCalculator;
