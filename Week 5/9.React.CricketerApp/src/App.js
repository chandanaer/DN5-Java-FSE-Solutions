import React from "react";
import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import IndianPlayers from "./IndianPlayers";

function App() {

  const flag = true;

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers />

        <hr />

        <Scorebelow70 />
      </div>
    );
  } else {
    return (
      <div>
        <IndianPlayers />
      </div>
    );
  }
}

export default App;