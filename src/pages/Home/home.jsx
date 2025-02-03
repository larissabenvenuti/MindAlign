import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
