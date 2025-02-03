import React from "react";
import { HomeContainer, CardsContainer, Card } from "./home";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <h1>Bem-vindo ao Your Planner</h1>
      <CardsContainer>
        <Card onClick={() => navigate("/calendar")}>
          <h2>📅 Calendário</h2>
          <p>Organize seus eventos e compromissos.</p>
        </Card>
        <Card onClick={() => navigate("/list")}>
          <h2>📋 Lista</h2>
          <p>Crie e gerencie suas tarefas.</p>
        </Card>
        <Card onClick={() => navigate("/diary")}>
          <h2>📖 Diário</h2>
          <p>Registre seus pensamentos e momentos do dia.</p>
        </Card>
      </CardsContainer>
    </HomeContainer>
  );
}
