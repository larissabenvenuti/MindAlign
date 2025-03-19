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

export const HeaderContainer = styled.header`
  width: 100vw;
  background-color: ${colors.primary};
  padding: 20px;
  box-shadow: 0 4px 8px ${colors.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${colors.accent};
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
  text-transform: uppercase; 
  letter-spacing: 2px; 

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

export const MainContainer = styled.div`
  background-color: ${colors.background};
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px ${colors.shadow};
  border-radius: 10px;
`;

export const Button = styled.button`
  background-color: ${colors.accent};
  color: ${colors.white};
  font-size: 1rem;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px ${colors.shadow};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
    transform: scale(1.05);
  }
`;
