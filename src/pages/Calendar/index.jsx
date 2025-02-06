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
    if (events.length > 0) {
      localStorage.setItem("calendarEvents", JSON.stringify(events));
    }
  }, [events]);

  const handleDateClick = (info) => {
    setCurrentDate(info.date);
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const handleEventClick = (info) => {
    const clickedEvent = events.find(event => event.id === info.event.id);
    setSelectedEvent(clickedEvent);
    setIsModalAbertoOpen(true);
  };

  const handleSaveEvent = (newEvent) => {
    const startDate = new Date(newEvent.start);
    const endDate = new Date(newEvent.end);
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      alert("Por favor, insira horários válidos.");
      return;
    }

    const updatedEvent = {
      ...newEvent,
      start: startDate, 
      end: endDate      
    };

    if (newEvent.id) {
      setEvents(prevEvents => prevEvents.map(event =>
        event.id === newEvent.id ? updatedEvent : event
      ));
    } else {
      const newEventWithId = { ...updatedEvent, id: Date.now().toString() };
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
                  center: "title",
                  right: "",
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
            <Today>
              <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridDay"
                locale={ptLocale}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "",
                }}
                editable={false}
                selectable={true}
                events={events.map(event => ({
                  ...event,
                  start: event.start instanceof Date ? event.start : new Date(event.start),
                  end: event.end instanceof Date ? event.end : new Date(event.end),
                }))}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                allDaySlot={false}
                slotDuration="00:30:00"
                slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
                eventTimeFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
              />
            </Today>
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
        eventDetails={selectedEvent || {}}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />
    </CalendarContainer>
  );
}
