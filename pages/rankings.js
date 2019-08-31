import React from "react";
import { PlayerList } from "components/PlayerList";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Player Rankings</h1>
      <hr />
      <PlayerList />
    </div>
  );
};

export default Home;
