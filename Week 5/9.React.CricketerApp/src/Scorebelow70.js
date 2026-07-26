import React from "react";
import { players } from "./ListofPlayers";

function Scorebelow70() {
  const players70 = players.filter(item => item.score <= 70);

  return (
    <div>
      <h1>List of Players having Scores Less than 70</h1>

      {players70.map((item, index) => (
        <li key={index}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </div>
  );
}

export default Scorebelow70;