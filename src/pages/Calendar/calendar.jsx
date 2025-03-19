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

export const CalendarContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: ${colors.background};
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 15px;
  }
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 0 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const TitleSection = styled.div`
  text-align: center;

  h1 {
    font-size: 1.7rem;
    font-weight: bold;
    color: ${colors.primaryHover};
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
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

export const Today = styled.div`
  .fc-toolbar-title {
    text-transform: capitalize;
  }

  .fc-col-header-cell .fc-col-header-cell-cushion {
    text-transform: capitalize;
  }

  .fc-view {
    border: 1px solid ${colors.border};
  }

  .fc-day {
    background-color: ${colors.white};
    color: ${colors.text};
    cursor: pointer;
    border: 1px solid ${colors.border};
  }

  .fc-day-today {
    background-color: ${colors.white} !important;
    color: ${colors.primary} !important;
  }

  .fc-prev-button,
  .fc-next-button {
    background-color: ${colors.primary};
    border: none;
    color: ${colors.white};
    font-size: 1rem;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    margin: 0 5px;
  }

  .fc-prev-button:hover,
  .fc-next-button:hover {
    background-color: ${colors.primaryHover};
    border: 2px solid ${colors.primary};
  }

  .fc-header-toolbar {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
