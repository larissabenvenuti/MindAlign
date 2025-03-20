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

export const HabitTrackerContainer = styled.div`
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

export const HabitTrackerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${colors.shadow};
  margin-bottom: 20px;
  align-items: center;

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

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
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
  padding: 12px 15px;
  font-size: 1rem;
  background-color: ${colors.accent};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 150px;

  &:hover {
    background-color: ${colors.primaryHover};
  }

  &:disabled {
    background-color: ${colors.secondary};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 8px;
  }
`;

export const HabitTable = styled.div`
  overflow-x: auto;
  max-width: 100%;
  display: relative;
`;

export const TableHeader = styled.thead`
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const TableRow = styled.tr`
  text-align: center;
`;

export const TableTitle = styled.th`
  padding: 15px;
  border: 1px solid ${colors.border};
  width: 100vw;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 10px;
  }
`;

export const TableBody = styled.tbody`
`;

export const Checkbox = styled.input`
  transform: scale(1.5);

  @media (max-width: 480px) {
    transform: scale(1.2);
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.primary};
  font-size: 1rem;
  transition: color 0.3s ease;
  margin: 10px;

  &:hover {
    color: ${colors.primaryHover};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.secondary};
  margin-top: 20px;
  padding: 20px;
  background: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 5px ${colors.shadow};

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px;
  }
`;
