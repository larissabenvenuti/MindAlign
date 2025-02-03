import styled from 'styled-components';

const colors = {
  primary: "#b96464",
  primaryHover: "#a15555",
  secondary: "#858585",
  background: "#ececec",
  text: "#000",
  white: "#fff",
  shadow: "rgba(0, 0, 0, 0.1)",
};

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  box-shadow: 0 2px 6px ${colors.shadow};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
`;

export const InputField = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
  font-size: 1rem;
`;

export const TextField = styled.textarea`
  width: 90%;
  height: 80px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  text-align: left;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  margin: 0px 5px;
  border: none;
  padding: 10px 20px;
  font-size: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryHover};
  }

  &:focus {
    outline: none;
  }
`;

