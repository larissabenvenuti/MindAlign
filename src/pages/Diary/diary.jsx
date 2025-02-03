import styled from "styled-components";

export const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const EntryForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;

  textarea {
    width: 100%;
    height: 120px;
    padding: 12px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    resize: none;
    margin-bottom: 10px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
    }
  }

  button {
    padding: 12px;
    font-size: 1.1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;

export const EntryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 500px;
`;

export const EntryCard = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #444;
  }

  small {
    color: #777;
    font-size: 0.9rem;
  }
`;

