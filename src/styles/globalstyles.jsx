import { createGlobalStyle } from "styled-components";

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


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Quicksand", sans-serif;
    background-color: ${colors.background};
  }

  html, body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
