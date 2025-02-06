import React, { useState, useEffect } from 'react';
import { ModalOverlay, ModalContainer, ModalHeader, InputField, TextField, Button, ButtonContainer } from './modal';

const ModalAberto = ({ isOpen, onClose, eventDetails = [], onSave, onDelete }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (Array.isArray(eventDetails)) {
      setEvents(eventDetails);
    } else {
      setEvents([eventDetails]);
    }
  }, [eventDetails]);

  const handleSave = () => {
    if (events.every(event => event.title.trim() && event.description.trim() && event.start && event.end)) {
      onSave(events);
      onClose();
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  const handleDelete = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    onDelete(id);
  };

  const handleInputChange = (index, field, value) => {
    const updatedEvents = [...events];
    updatedEvents[index][field] = value;
    setEvents(updatedEvents);
  };

  const formatTime = (time) => {
    if (!time) return '';
    const date = new Date(time);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          {events.length > 1 ? 'Visualizar e Editar Eventos' : `Editar Evento - ${events[0]?.title || ''}`}
        </ModalHeader>

        {events.map((event, index) => (
          <div key={event.id}>
            <InputField
              type="text"
              placeholder="Título do evento"
              value={event.title}
              onChange={(e) => handleInputChange(index, 'title', e.target.value)}
            />
            <TextField
              placeholder="Descrição do evento"
              value={event.description}
              onChange={(e) => handleInputChange(index, 'description', e.target.value)}
            />
            <InputField
              type="time"
              value={formatTime(event.start)} 
              onChange={(e) => handleInputChange(index, 'start', `${event.start.split('T')[0]}T${e.target.value}:00`)}
            />
            <InputField
              type="time"
              value={formatTime(event.end)} 
              onChange={(e) => handleInputChange(index, 'end', `${event.end.split('T')[0]}T${e.target.value}:00`)}
            />
            <ButtonContainer>
              <Button onClick={() => handleDelete(event.id)} style={{ backgroundColor: '#d9534f' }}>
                Excluir
              </Button>
            </ButtonContainer>
          </div>
        ))}

        <ButtonContainer>
          <Button onClick={handleSave}>Salvar Alterações</Button>
          <Button onClick={onClose} style={{ backgroundColor: '#858585' }}>
            Fechar
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalAberto;
