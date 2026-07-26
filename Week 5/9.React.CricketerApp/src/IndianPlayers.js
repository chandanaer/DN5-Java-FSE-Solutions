import React from "react";

const IndianPlayers = () => {

  const IndianTeam = [
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvaraj5",
    "Raina6"
  ];

  // ES6 Destructuring
  const [odd1, even1, odd2, even2, odd3, even3] = IndianTeam;

  const T20Players = [
    "First Player",
    "Second Player",
    "Third Player"
  ];

  const RanjiTrophyPlayers = [
    "Fourth Player",
    "Fifth Player",
    "Sixth Player"
  ];

  // ES6 Spread Operator
  const IndianPlayers = [
    ...T20Players,
    ...RanjiTrophyPlayers
  ];

  return (
    <div>

      <h1>Odd Players</h1>
      <ul>
        <li>Mr. {odd1}</li>
        <li>Mr. {odd2}</li>
        <li>Mr. {odd3}</li>
      </ul>

      <hr />

      <h1>Even Players</h1>
      <ul>
        <li>Mr. {even1}</li>
        <li>Mr. {even2}</li>
        <li>Mr. {even3}</li>
      </ul>

      <hr />

      <h1>List of Indian Players Merged:</h1>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>

    </div>
  );
};

export default IndianPlayers;