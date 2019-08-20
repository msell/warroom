import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash.get";
import { ErrorMessage } from "components";
import { PLAYER_DETAILS_QUERY } from "queries"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  min-width: 300px;
  justify-content: space-evenly;
  text-align: left;
  max-height: 80vh;
  overflow-y: scroll;
`;

export const PlayerDetails = props => {
  const { loading, error, data } = useQuery(PLAYER_DETAILS_QUERY, {
    variables: { id: props.id }
  });

  if (error) return <ErrorMessage message="Error loading details." />;
  if (loading) return <div>Loading...</div>;

  const { playerDetails } = data;
  const headline = get(playerDetails, "notes[0].headline", undefined);
  const body = get(playerDetails, "notes[0].body", undefined);

  return (
    <Container>
      <h1>{playerDetails.name}</h1>
      <img src={playerDetails.photo} alt={`Photo of ${playerDetails.name}`} />
      {headline && <h2>{headline}</h2>}
      {body && <p>{body}</p>}
    </Container>
  );
};
