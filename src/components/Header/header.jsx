import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #b96464;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
