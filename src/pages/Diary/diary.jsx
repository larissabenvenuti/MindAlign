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
  accent: "#F2C77B",
};

export const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${colors.background};
  color: ${colors.text};
  padding: 20px;

  @media (max-width: 1024px) {
    gap: 20px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    gap: 15px;
    padding: 10px;
  }
`;

export const DiaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${colors.shadow};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const TitleSection = styled.div`
  text-align: center;

  h1 {
    font-size: 1.7rem;
    font-weight: bold;
    color: ${colors.primaryHover};
  }

  p {
    font-size: 0.8rem;
    color: ${colors.secondary};
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.6rem;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Card = styled.div`
  padding: 15px;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 2px 5px ${colors.shadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  p {
    font-size: 1rem;
    color: ${colors.text};
    word-wrap: break-word;
  }

  small {
    font-size: 0.8rem;
    color: ${colors.secondary};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${colors.border};
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`;

export const AddButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: ${colors.accent};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryHover};
  }

  &:disabled {
    background-color: ${colors.secondary};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.secondary};
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  background: ${colors.white};
  box-shadow: 0 2px 5px ${colors.shadow};

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.primary};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primaryHover};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CharacterCount = styled.div`
  text-align: right;
  color: ${(props) => (props.isOverLimit ? "red" : colors.secondary)};
  font-size: 0.9rem;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
