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

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const CharacterCounter = styled.span`
  font-size: 0.9rem;
  color: ${colors.secondary};
  text-align: right;
`;

export const Input = styled.input`
  flex: 1;
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
  &:disabled {
    background-color: ${colors.secondary};
    cursor: not-allowed;
  }
`;

export const ListContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  text-align: center;
  background: ${colors.background};
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${colors.shadow};
  margin-bottom: 20px;
`;

export const ListLabel = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: ${colors.text};
`;

export const ListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ListCard = styled.div`
  padding: 15px;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 2px 5px ${colors.shadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px ${colors.shadow};

  span {
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    color: ${(props) => (props.completed ? colors.secondary : colors.text)};
    overflow: hidden;
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
