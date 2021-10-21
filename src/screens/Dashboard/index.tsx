import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  UserGreeting,
  Photo,
  UserName,
  Icon,
  HighlightsCards,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/37818334?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Bruno</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightsCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightsCards>
    </Container>
  );
}
