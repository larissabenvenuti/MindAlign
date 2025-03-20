import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FaTrash } from "react-icons/fa";
import {
  DiaryContainer,
  DiaryWrapper,
  TitleSection,
  CardsContainer,
  Card,
  InputWrapper,
  Input,
  AddButton,
  DeleteButton,
  EmptyState,
  CharacterCount,
} from "./diary";

const MAX_CHARACTERS = 500;

export default function Diary() {
  const storedEntries = useMemo(() => {
    const savedEntries = localStorage.getItem("diaryEntries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  }, []);

  const [entries, setEntries] = useState(storedEntries);
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = useCallback(() => {
    const trimmedText = text.trim();
    if (trimmedText && trimmedText.length <= MAX_CHARACTERS) {
      setEntries((prev) => [
        { text: trimmedText, date: new Date().toLocaleDateString() },
        ...prev,
      ]);
      setText("");
    }
  }, [text]);

  const handleDeleteEntry = useCallback((index) => {
    setEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
  }, []);

  return (
    <DiaryContainer>
      <TitleSection>
        <h1>📖 Meu Diário</h1>
        <p>Registre seus pensamentos e reflexões do dia.</p>
      </TitleSection>
      <DiaryWrapper>
        <CardsContainer>
          <InputWrapper>
          <Input
            placeholder="Escreva seu pensamento..."
            value={text}
            onChange={(e) => {
              if (e.target.value.length <= MAX_CHARACTERS) {
                setText(e.target.value);
              }
            }}
          />
          <AddButton
            onClick={handleAddEntry}
            disabled={!text.trim() || text.trim().length > MAX_CHARACTERS}
          >
            Adicionar
          </AddButton>
          </InputWrapper>
          <CharacterCount isOverLimit={text.length > MAX_CHARACTERS}>
            {text.length}/{MAX_CHARACTERS} caracteres
          </CharacterCount>

          {entries.length === 0 ? (
            <EmptyState>Sem anotações ainda. Comece a escrever!</EmptyState>
          ) : (
            entries.map((entry, index) => (
              <Card key={index}>
                <div>
                  <p>{entry.text}</p>
                  <small>{entry.date}</small>
                </div>
                <DeleteButton onClick={() => handleDeleteEntry(index)}>
                  <FaTrash />
                </DeleteButton>
              </Card>
            ))
          )}
        </CardsContainer>
      </DiaryWrapper>
    </DiaryContainer>
  );
}
