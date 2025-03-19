import styled from "styled-components";

const colors = {
  primary: "#5D8A8E",       
  primaryHover: "#4F7772",  
  secondary: "#A1B3B0",    
  background: "#F4F6F5",    
  text: "#333333",          
  white: "#FFFFFF",          
  shadow: "rgba(0, 0, 0, 0.1)", 
  border: "#D6CFC7",        
  accent: "#F2C77B"      
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
