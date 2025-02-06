import styled from "styled-components";

const colors = {
  primary: "#b96464",
  primaryHover: "#a15555",
  secondary: "#858585",
  background: "#ececec",
  text: "#000",
  white: "#fff",
  shadow: "rgba(0, 0, 0, 0.1)",
  border: "#ccc",
};

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${colors.primary}; 
  color: ${colors.white}; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px ${colors.shadow}; 
  background: ${colors.primary};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px; 
  text-align: center;
  color: ${colors.white}; 
`;
