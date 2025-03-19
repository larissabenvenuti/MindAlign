import React from "react";
import { HeaderContainer, Title } from "./header";

export default function Header() {
  return (
    <HeaderContainer>
      <Title>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          MindAlign
        </a>
      </Title>
    </HeaderContainer>
  );
}