import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import ptLocale from "@fullcalendar/core/locales/pt-br";
import { CalendarContainer, CalendarWrapper, CalendarGrid, CalendarLabel, Today } from "./calendar";
import Modal from "../../components/Modal";
import ModalAberto from "../../components/Modal/modalaberto";

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalAbertoOpen, setIsModalAbertoOpen] = useState(false);

  useEffect(() => {
    const storedEvents = localStorage.getItem("calendarEvents");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const handleDateClick = (info) => {
    setCurrentDate(info.date);
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const handleEventClick = (info) => {
    const clickedEvent = events.find(event => event.id === info.event.id);
    setSelectedEvent([clickedEvent]);
    setIsModalAbertoOpen(true);
  };

  const handleSaveEvent = (newEvent) => {
    if (newEvent.id) {
      setEvents(prevEvents => prevEvents.map(event =>
        event.id === newEvent.id ? { ...event, title: newEvent.title, description: newEvent.description, start: newEvent.start, end: newEvent.end } : event
      ));
    } else {
      const newEventWithId = { ...newEvent, id: Date.now().toString(), start: newEvent.start, end: newEvent.end };
      setEvents(prevEvents => [...prevEvents, newEventWithId]);
    }
  };

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    setIsModalAbertoOpen(false); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleCloseModalAberto = () => {
    setIsModalAbertoOpen(false);
    setSelectedEvent(null);
  };

  return (
    <CalendarContainer>
      <CalendarWrapper>
        <CalendarGrid>
          <div>
            <CalendarLabel>📆 Calendário Mensal: </CalendarLabel>
            <Today>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locale={ptLocale}
                headerToolbar={{
                  left: "prev,next today",
                  center: "",
                  right: "title",
                }}
                editable={true}
                selectable={true}
                events={events}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
              />
            </Today>
          </div>
          <div>
            <CalendarLabel>📅 Calendário Diário: </CalendarLabel>
            <FullCalendar
              plugins={[timeGridPlugin, interactionPlugin]}
              initialView="timeGridDay"
              locale={ptLocale}
              headerToolbar={{
                left: "prev,next today",
                center: "",
                right: "title",
              }}
              editable={true}
              selectable={true}
              events={events}
              dateClick={handleDateClick}
              eventClick={handleEventClick}
            />
          </div>
        </CalendarGrid>
      </CalendarWrapper>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEvent}
        currentDate={currentDate}
        existingEvent={selectedEvent}
      />

      <ModalAberto
        isOpen={isModalAbertoOpen}
        onClose={handleCloseModalAberto}
        eventDetails={selectedEvent || []}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />
    </CalendarContainer>
  );
}
