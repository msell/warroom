import React from "react";
import styled from "@emotion/styled";

const PlayerCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 15px;
  margin: 5px;
`;
const Home = () => (
  <div>
    <PlayerCard>Player Foo</PlayerCard>
  </div>
);

export default Home;
