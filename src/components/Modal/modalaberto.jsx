import React, { useState, useEffect } from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  InputField,
  TextField,
  Button,
  ButtonContainer,
} from "./modal";

const ModalAberto = ({ isOpen, onClose, eventDetails, onSave, onDelete }) => {
  const [event, setEvent] = useState({});
  const [originalEventDate, setOriginalEventDate] = useState(null);

  useEffect(() => {
    if (eventDetails) {
      const startTime = new Date(eventDetails.start);
      const endTime = new Date(eventDetails.end);

      setOriginalEventDate(startTime);

      setEvent({
        ...eventDetails,
        start: startTime.toTimeString().slice(0, 5),
        end: endTime.toTimeString().slice(0, 5),
      });
    }
  }, [eventDetails]);

  const handleInputChange = (field, value) => {
    setEvent((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!event.title || !event.description || !event.start || !event.end) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const startDateTime = new Date(originalEventDate);
    const endDateTime = new Date(originalEventDate);

    const [startHour, startMinute] = event.start.split(":").map(Number);
    const [endHour, endMinute] = event.end.split(":").map(Number);

    startDateTime.setHours(startHour, startMinute, 0);
    endDateTime.setHours(endHour, endMinute, 0);

    if (endDateTime <= startDateTime) {
      alert("O horário de término deve ser após o início.");
      return;
    }

    const updatedEvent = {
      ...event,
      start: startDateTime.toISOString(),
      end: endDateTime.toISOString(),
      backgroundColor: "#b96464",
      borderColor: "#b96464",
    };

    onSave(updatedEvent);
    onClose();
  };

  return isOpen ? (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>Editar Evento</ModalHeader>
        <InputField
          type="text"
          value={event.title || ""}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
        <TextField
          value={event.description || ""}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
        <InputField
          type="time"
          value={event.start || ""}
          onChange={(e) => handleInputChange("start", e.target.value)}
        />
        <InputField
          type="time"
          value={event.end || ""}
          onChange={(e) => handleInputChange("end", e.target.value)}
        />
        <ButtonContainer>
          <Button onClick={handleSave}>Salvar</Button>
          <Button
            onClick={() => onDelete(event.id)}
            style={{ backgroundColor: "#d9534f" }}
          >
            Excluir
          </Button>
          <Button onClick={onClose} style={{ backgroundColor: "#858585" }}>
            Fechar
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  ) : null;
};

export default ModalAberto;
