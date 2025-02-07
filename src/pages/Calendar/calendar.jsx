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

export const CalendarContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: ${colors.background};
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
`;

export const CalendarLabel = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${colors.text};
  padding: 12px;
  display: inline-block;
  letter-spacing: 1px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 10px;
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

  .fc-prev-button:active,
  .fc-next-button:active {
    background-color: none !important;
    border: 2px solid ${colors.primary};
  }

  .fc-prev-button:focus,
  .fc-next-button:focus {
    background-color: ${colors.primaryHover};
    border: 2px solid ${colors.primary};
    outline: none !important;
  }

  .fc-header-toolbar {
    display: flex;
    justify-content: left;
    text-align: center;
    gap: 10px;
  }

  .fc-today-button {
    background-color: ${colors.primary};
    border: none;
  }

  .fc-today-button:hover {
    background-color: ${colors.primaryHover};
  }

  .fc-today-button.fc-state-active {
    background-color: ${colors.white};
  }

  .fc-event {
    background-color: ${colors.primary} !important;
    color: ${colors.white} !important;
    padding: 5px;
    transition: background-color 0.2s ease, transform 0.2s ease;
    border: 1px solid ${colors.border};
    font-size: 0.85rem;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }

  .fc-daygrid-event-dot {
    display: none !important;
  }

  .fc-day-today .fc-event {
    background-color: ${colors.primary} !important;
    color: ${colors.white} !important;
  }

  .fc-timegrid-event {
    height: 100% !important;
    display: flex;
    align-items: stretch;
  }

  .fc-timegrid-event .fc-time {
    color: ${colors.white} !important;
    font-weight: bold;
  }

  .fc-prev-button:focus,
  .fc-next-button:focus,
  .fc-today-button:focus {
    outline: none !important;
  }
`;
