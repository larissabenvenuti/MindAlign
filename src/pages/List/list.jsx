import styled from "styled-components";

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

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
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
  }
`;

export const ListContent = styled.div`
  .task-input {
    width: 100%;
  }

  .task-list {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const AddButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #22adc5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a8c9c;
  }
`;

export const ListCard = styled.div`
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.2rem;
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  span {
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    color: ${(props) => (props.completed ? "#888" : "#000")};
  }

  button {
    background: none;
    border: none;
    color: red;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
