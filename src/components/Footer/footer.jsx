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

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: ${colors.background};
  padding: 10px 0; 
`;

export const FooterText = styled.p`
  margin: 0;
  padding: 5px;
  letter-spacing: 1px;
  text-align: center;
  font-size: 0.6rem;
  color: ${colors.text};
`;

