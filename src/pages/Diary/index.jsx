import React, { useState, useEffect } from "react";
import {
  DiaryContainer,
  EntryForm,
  EntryList,
  EntryCard,
  TextArea,
  Button,
  DeleteButton,
  DiaryLabel,
  TextAndButton,
  EmptyState,
  CharacterCount,
} from "./diary";
import { FaTrash } from "react-icons/fa";

export default function Diary() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("diaryEntries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [text, setText] = useState("");
  const MAX_CHARACTERS = 500;

  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = () => {
    const trimmedText = text.trim();
    if (trimmedText !== "" && trimmedText.length <= MAX_CHARACTERS) {
      const newEntry = {
        text: trimmedText,
        date: new Date().toLocaleDateString(),
      };
      setEntries([newEntry, ...entries]);
      setText("");
    }
  };

  const handleDeleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <DiaryContainer>
      <DiaryLabel>📖 Meu Diário</DiaryLabel>
      <EntryForm>
        <TextAndButton>
          <TextArea
            placeholder="Escreva seu pensamento..."
            value={text}
            onChange={(e) => {
              if (e.target.value.length <= MAX_CHARACTERS) {
                setText(e.target.value);
              }
            }}
          />
          <Button
            onClick={handleAddEntry}
            disabled={
              text.trim().length === 0 || text.trim().length > MAX_CHARACTERS
            }
          >
            Adicionar
          </Button>
        </TextAndButton>
        <CharacterCount isOverLimit={text.trim().length > MAX_CHARACTERS}>
          {text.trim().length}/{MAX_CHARACTERS} caracteres
        </CharacterCount>
      </EntryForm>

      <EntryList>
        {entries.length === 0 ? (
          <EmptyState>🎉 Sem anotações ainda. Comece a escrever!</EmptyState>
        ) : (
          entries.map((entry, index) => (
            <EntryCard key={index}>
              <div>
                <p>{entry.text}</p>
                <small>{entry.date}</small>
              </div>
              <DeleteButton onClick={() => handleDeleteEntry(index)}>
                <FaTrash />
              </DeleteButton>
            </EntryCard>
          ))
        )}
      </EntryList>
    </DiaryContainer>
  );
}
