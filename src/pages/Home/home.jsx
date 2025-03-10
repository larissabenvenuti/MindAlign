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

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 40px;
  position: relative;
  overflow: hidden;
  background: ${colors.background};
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Card = styled.div`
  background: ${colors.white};
  border-radius: 15px;
  padding: 25px;
  width: 260px;
  text-align: center;
  box-shadow: 0 4px 20px ${colors.shadow};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  overflow: hidden;

  &:hover {
    transform: scale(0.95) translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 15px;
    font-size: 1.7rem;
    font-weight: 600;
    color: ${colors.primary};
    line-height: 1.5;
  }

  p {
    font-size: 1rem;
    color: ${colors.text};
    line-height: 1.6;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;
