import React from "react";
import "./App.css";
import officeImage from "./office.jpg";

function App() {
  const element = "Office Space";

  const offices = [
    {
      Name: "Cognizant",
      Rent: 50000,
      Address: "Chennai",
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Bangalore",
    },
    {
      Name: "Regus",
      Rent: 55000,
      Address: "Hyderabad",
    },
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>

      <img
        src={officeImage}
        className="office-image"
        alt="Office Space"
      />

      {offices.map((office, index) => (
        <div className="office-container" key={index}>
          <h1>Name: {office.Name}</h1>

          <h3
            style={{
              color: office.Rent < 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {office.Rent}
          </h3>

          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;