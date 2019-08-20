import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-boost";
import { PlayerCard, ErrorMessage } from "components";
import { PLAYER_RANKING_QUERY } from "queries";

import styled from "@emotion/styled";


const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const PlayerList = props => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    PLAYER_RANKING_QUERY,
    {
      variables: undefined, // will have some soon
      notifyOnNetworkStatusChange: true
    }
  );

  const loadingMoreRankings = networkStatus === NetworkStatus.fetchMore;

  const loadMoreRankings = () => {};

  if (error) return <ErrorMessage message="Error loading rankings." />;
  if (loading && !loadingMoreRankings) return <div>Loading...</div>;

  const { playerRankings } = data;
  return (
    <StyledList>
      {playerRankings.map(x => (
        <PlayerCard key={x.id} {...x} />
      ))}
    </StyledList>
  );
};
