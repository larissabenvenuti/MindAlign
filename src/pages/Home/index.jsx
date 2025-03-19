import React from "react";
import { HomeContainer, ContentWrapper, TitleSection, CardsContainer, Card } from "./home";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <ContentWrapper>
        <TitleSection>
          <h1>Bem-vindo(a) ao MindAlign</h1>
          <p>Organize seu dia de forma simples e eficiente, da maneira que preferir!</p>
        </TitleSection>
        <CardsContainer>
          <Card onClick={() => navigate("/calendar")}>
            <h2>📅 Calendário</h2>
            <p>Organize seus eventos e compromissos.</p>
          </Card>
          <Card onClick={() => navigate("/list")}>
            <h2>📋 Lista de Tarefas</h2>
            <p>Crie e gerencie suas tarefas.</p>
          </Card>
          <Card onClick={() => navigate("/diary")}>
            <h2>📖 Diário</h2>
            <p>Registre seus pensamentos e anotações.</p>
          </Card>
          <Card onClick={() => navigate("/habittracker")}>
            <h2> 🎯 Habit Tracker</h2>
            <p>Faça rastreamento de seus hábitos diários.</p>
          </Card>
        </CardsContainer>
      </ContentWrapper>
    </HomeContainer>
  );
}
