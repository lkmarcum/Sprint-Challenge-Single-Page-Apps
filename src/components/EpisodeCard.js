import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function EpisodeCard({ episode }) {
  // image={image}
  return (
    <Card>
      <Card.Content header={episode.name} />
      <Card.Content description={episode.air_date} />
      <Card.Content description={episode.episode} />
      <Card.Content extra>
        <Icon name="user" />
        {episode.characters.length} Characters
      </Card.Content>
    </Card>
  );
}
