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

const Modal = ({ isOpen, onClose, onSave, currentDate, existingEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    general: "",
    timeError: "",
  });

  useEffect(() => {
    if (existingEvent) {
      const event = existingEvent[0] || {};
      setTitle(event.title || "");
      setDescription(event.description || "");
      setStartTime(
        event.start ? event.start.split("T")[1].substring(0, 5) : ""
      );
      setEndTime(event.end ? event.end.split("T")[1].substring(0, 5) : "");
    } else {
      const clickTime =
        currentDate instanceof Date
          ? currentDate.toTimeString().slice(0, 5)
          : new Date().toTimeString().slice(0, 5);

      setTitle("");
      setDescription("");
      setStartTime(clickTime);
      setEndTime("");
    }
    setValidationErrors({ general: "", timeError: "" });
  }, [existingEvent, isOpen, currentDate]);

  const handleSave = () => {
    setValidationErrors({ general: "", timeError: "" });
    if (!title.trim() || !description.trim() || !startTime) {
      setValidationErrors((prev) => ({
        ...prev,
        general: "Por favor preencha todos os campos",
      }));
      return;
    }

    if (endTime) {
      const [startHour, startMinute] = startTime.split(":").map(Number);
      const [endHour, endMinute] = endTime.split(":").map(Number);
      const startMinutes = startHour * 60 + startMinute;
      const endMinutes = endHour * 60 + endMinute;

      if (endMinutes <= startMinutes) {
        setValidationErrors((prev) => ({
          ...prev,
          timeError: "O horário final deve ser posterior ao horário inicial",
        }));
        return;
      }
    }

    const newEvent = {
      id: existingEvent?.[0]?.id || null,
      title,
      description,
      start: new Date(currentDate).setHours(
        ...startTime.split(":").map((time) => parseInt(time))
      ),
      end: endTime
        ? new Date(currentDate).setHours(
            ...endTime.split(":").map((time) => parseInt(time))
          )
        : null,
    };

    onSave(newEvent);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          {existingEvent && existingEvent.length > 0
            ? "Editar Evento"
            : "Adicionar Novo Evento"}
        </ModalHeader>

        {validationErrors.general && (
          <p
            style={{ color: "red", textAlign: "center", marginBottom: "10px" }}
          >
            {validationErrors.general}
          </p>
        )}

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
          placeholder="Horário final (opcional)"
        />

        {validationErrors.timeError && (
          <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
            {validationErrors.timeError}
          </p>
        )}

        <ButtonContainer>
          <Button onClick={handleSave}>Salvar Evento</Button>
          <Button onClick={onClose} style={{ backgroundColor: "#858585" }}>
            Fechar
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
