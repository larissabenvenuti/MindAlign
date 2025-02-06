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

export const DiaryContainer = styled.div`
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

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 25px;
    color: ${colors.primary};
  }

  @media (max-width: 767px) {
    margin-top: 80px;
    padding: 10px;
  }
`;

export const EntryForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background: ${colors.white};
  padding: 20px;
  gap: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${colors.shadow};
  margin-bottom: 20px;
`;

export const TextAndButton = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.white};
  gap: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const DiaryLabel = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: ${colors.text};
  padding: 12px;
  display: inline-block;
  letter-spacing: 1px;
  position: relative;
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 120px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${colors.border};
  overflow: hidden;
`;

export const Button = styled.button`
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

export const EntryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 800px;
`;

export const EntryCard = styled.div`
  background: ${colors.white};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 15px ${colors.shadow};
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 5px solid ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px ${colors.shadow};
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: ${colors.text};
  }

  small {
    color: ${colors.secondary};
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
`;
