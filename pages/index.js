import React from "react";
import styled from "@emotion/styled";
import { PlayerList } from "components/PlayerList";

const PlayerCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 15px;
  margin: 5px;
`;

const Home = ({ rankings }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Player Rankings</h1>
      <hr />
      <PlayerList />
    </div>
  );
};

// if you want SSR
// Home.getInitialProps = async () => {
//   const res = await axios.get(url);
//   return { rankings: res.data.players };
// };

export default Home;
