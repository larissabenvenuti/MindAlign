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

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${colors.background};
  color: ${colors.text};
  padding: 40px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  align-items: center;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
`;

export const TitleSection = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 12px;
    color: ${colors.primaryHover};
  }

  p {
    font-size: 1.2rem;
    color: ${colors.secondary};
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

export const Card = styled.div`
  background: ${colors.white};
  border-left: 6px solid ${colors.primary};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 4px 12px ${colors.shadow};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 18px ${colors.shadow};
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: ${colors.primaryHover};
  }

  p {
    font-size: 1rem;
    color: ${colors.text};
  }
`;
