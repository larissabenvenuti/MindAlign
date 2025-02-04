import styled from "styled-components";

const colors = {
  primary: "#b96464",
  primaryHover: "#a15555",
  secondary: "#858585",
  background: "#ececec",
  text: "#000",
  white: "#fff",
  shadow: "rgba(0, 0, 0, 0.1)",
};

export const CalendarContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const CalendarWrapper = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CalendarLabel = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: ${colors.text};
  padding: 12px;
  display: inline-block;
  letter-spacing: 1px;
  position: relative;
`;

export const Today = styled.div`
  .fc-day-today {
    background-color: ${colors.background} !important;
    color: ${colors.text} !important;
  }

  .fc-prev-button,
  .fc-next-button,
  .fc-today-button {
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
    color: ${colors.white};
    font-size: 1rem;
    padding: 5px 7px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    border-radius: 8px;

    &:hover {
      background-color: ${colors.primaryHover};
      border-color: ${colors.primaryHover};
    }
  }

  .fc-today-button.fc-state-active {
    background-color: ${colors.secondary};
    color: ${colors.white};
    border-color: ${colors.secondary};
  }

  .fc-event {
    background-color: ${colors.secondary} !important;
    border-color: ${colors.secondary} !important;
    color: ${colors.white};
    border-radius: 5px;
    padding: 5px;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
      transform: scale(1.06);
    }
  }

  .fc-timegrid-event {
    color: ${colors.white} !important;
  }
`;

