import React, { useState, useEffect } from 'react';
import { ModalOverlay, ModalContainer, ModalHeader, InputField, TextField, Button, ButtonContainer } from './modal';

const Modal = ({ isOpen, onClose, onSave, currentDate, existingEvent }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    if (existingEvent) {
      const event = existingEvent[0] || {};
      setTitle(event.title || '');
      setDescription(event.description || '');
      setStartTime(event.start ? event.start.split('T')[1].substring(0, 5) : '');
      setEndTime(event.end ? event.end.split('T')[1].substring(0, 5) : '');
    } else {
      setTitle('');
      setDescription('');
      setStartTime('');
      setEndTime('');
    }
  }, [existingEvent, isOpen]);

  const handleSave = () => {
    if (title.trim() && description.trim() && startTime && endTime) {
      const newEvent = {
        id: existingEvent?.[0]?.id || null,
        title,
        description,
        start: `${currentDate.toISOString().split('T')[0]}T${startTime}:00`,
        end: `${currentDate.toISOString().split('T')[0]}T${endTime}:00`,
      };
      onSave(newEvent);
      onClose();
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>{existingEvent && existingEvent.length > 0 ? 'Editar Evento' : 'Adicionar Novo Evento'}</ModalHeader>
        <InputField
          type="text"
          placeholder="Título do evento"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          placeholder="Descrição do evento"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputField
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <InputField
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <ButtonContainer>
          <Button onClick={handleSave}>Salvar Evento</Button>
          <Button onClick={onClose} style={{ backgroundColor: '#858585' }}>
            Fechar
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;