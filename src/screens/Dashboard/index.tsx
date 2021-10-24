import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
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
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Venda",
      amount: "R$ 1.000,00",
      date: "13/04/2020",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburguer",
      amount: "R$ 1.000,00",
      date: "13/04/2020",
      category: {
        name: "Compras",
        icon: "coffee",
      },
    },
    {
      id: "3",
      type: "positive",
      title: "Aluguel apartamento",
      amount: "R$ 1.000,00",
      date: "13/04/2020",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
    },
  ];

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
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 2.000,00"
          lastTransaction="Última saída dia 15 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 15.400,00"
          lastTransaction="1 a 16 de abril"
          type="total"
        />
      </HighlightsCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
