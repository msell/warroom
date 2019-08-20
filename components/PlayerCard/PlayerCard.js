import React from "react";
import { Modal, PlayerDetails } from "components";
import * as Styled from "./Styles";
import { useScreenSize } from "hooks";

export const PlayerCard = props => {
  const [showDetails, setShowDetails] = React.useState(false);
  const { deviceType } = useScreenSize();

  const toggleDetails = () => setShowDetails(!showDetails);
  const Card = deviceType === "mobile" ? Styled.SquareCard : Styled.WideCard;

  return (
    <Card teamAbbr={props.teamAbbr}>
      <Styled.Logo
        src={`https://static.nfl.com/static/content/public/static/img/fantasy/avatar/240x240/fan_avatars_${
          props.teamAbbr === "LA" ? "LAR" : props.teamAbbr
        }_2.png`}
      />
      <div>
        <Styled.Name>
          {props.firstName} {props.lastName}
        </Styled.Name>
        <Styled.Summary>
          <Styled.TeamPos>
            {props.teamAbbr} - {props.position}
          </Styled.TeamPos>
          <Styled.Button onClick={toggleDetails}>Read More</Styled.Button>
        </Styled.Summary>
      </div>
      <Styled.Box>
        <Styled.Rank>Rank</Styled.Rank> {props.rank}
      </Styled.Box>
      <Modal open={showDetails} onClose={toggleDetails}>
        <PlayerDetails id={props.id} />
      </Modal>
    </Card>
  );
};
