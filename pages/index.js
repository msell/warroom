import React from "react";
import styled from "@emotion/styled";
import axios from "axios";

const PlayerCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  padding: 15px;
  margin: 5px;
`;

const url = `http://api.fantasy.nfl.com/v1/players/editordraftranks?format=json&count=100&offset=0`;

const Home = ({ rankings }) => {
  return (
    <div>
      <div>Player Rankings</div>
      {rankings.map(x => (
        <PlayerCard key={x.id}>{x.lastName}</PlayerCard>
      ))}
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await axios.get(url);
  return { rankings: res.data.players };
};
export default Home;
