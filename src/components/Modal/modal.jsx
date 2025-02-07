import styled from "styled-components";

const colors = {
  primary: "#b96464",
  primaryHover: "#a15555",
  secondary: "#858585",
  background: "#f7f7f7",
  text: "#333",
  white: "#fff",
  shadow: "rgba(0, 0, 0, 0.15)",
  border: "#ddd",
  inputBackground: "#fafafa",
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
  backdrop-filter: blur(0.5px);
`;

export const ModalContainer = styled.div`
  background-color: ${colors.white};
  padding: 25px;
  border-radius: 12px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 4px 10px ${colors.shadow};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.h3`
  margin-bottom: 18px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${colors.text};
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid ${colors.border};
  border-radius: 6px;
  font-size: 1rem;
  background-color: ${colors.inputBackground};
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${colors.primary};
    outline: none;
    box-shadow: 0 0 5px ${colors.primaryHover};
  }
`;

export const TextField = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid ${colors.border};
  border-radius: 6px;
  resize: vertical;
  font-size: 1rem;
  background-color: ${colors.inputBackground};
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${colors.primary};
    outline: none;
    box-shadow: 0 0 5px ${colors.primaryHover};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  margin: 0 5px;
  border: none;
  padding: 12px 18px;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: ${colors.primaryHover};
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${colors.primaryHover};
  }

  &:disabled {
    background-color: ${colors.secondary};
    cursor: not-allowed;
  }
`;
