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
  margin-bottom: 30px;

  h1 {
    font-size: 2rem;
    color: ${colors.primaryHover};
  }

  p {
    font-size: 1rem;
    color: ${colors.secondary};
  }
`;

export const HabitInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
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

export const HabitTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.thead`
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const TableRow = styled.tr`
  text-align: center;
`;

export const TableCell = styled.th`
  padding: 10px;
  border: 1px solid ${colors.border};
`;

export const TableBody = styled.tbody``;

export const Checkbox = styled.input`
  transform: scale(1.5);
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
`;
