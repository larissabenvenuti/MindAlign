import styled from "styled-components";

const colors = {
  primary: "#b96464",
  primaryHover: "#a15555",
  secondary: "#858585",
  background: "#ececec",
  text: "#000",
  white: "#fff",
  shadow: "rgba(0, 0, 0, 0.1)",
  highlight: "#22adc5",
  highlightHover: "#1a8c9c",
  border: "#ccc",
};

export const ListContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  @media (max-width: 767px) {
    margin-top: 80px;
    padding: 10px;
  }
`;

export const ListLabel = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: ${colors.text};
  padding: 12px;
  display: inline-block;
  letter-spacing: 1px;
  position: relative;
`;

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${colors.shadow};
  
  .task-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .task-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const ListHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: ${colors.primary};
  }
`;

export const ListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${colors.border};
  overflow: hidden;
`;

export const AddButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

export const ListCard = styled.div`
  padding: 15px;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 2px 5px ${colors.shadow};
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.2rem;
    color: ${colors.text};
  }
`;

export const TaskItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px ${colors.shadow};

  span {
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    color: ${(props) => (props.completed ? colors.secondary : colors.text)};
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${colors.primary};
`;

export const TaskCounter = styled.p`
  font-size: 1rem;
  color: ${colors.text};
  text-align: center;
  margin-top: 10px;
  
  span {
    font-weight: bold;
    color: ${colors.primary};
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
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 10px; 
  top: 50%;
  transform: translateY(-50%); 
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    color: darkred;
  }
`;
