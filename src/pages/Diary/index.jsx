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
} from "./diary";
import { FaTrash } from "react-icons/fa";

export default function Diary() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const storedEntries = localStorage.getItem("diaryEntries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem("diaryEntries", JSON.stringify(entries));
    }
  }, [entries]);

  const handleAddEntry = () => {
    if (text.trim() !== "") {
      const newEntry = { text, date: new Date().toLocaleDateString() };
      const updatedEntries = [newEntry, ...entries];
      setEntries(updatedEntries);
      setText("");
    }
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <DiaryContainer>
      <DiaryLabel>📖 Meu Diário</DiaryLabel>
      <EntryForm>
        <TextAndButton>
        <TextArea
          placeholder="Escreva seu pensamento..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleAddEntry}>Adicionar</Button>
        </TextAndButton>
      <EntryList>
        {entries.map((entry, index) => (
          <EntryCard key={index}>
            <div>
              <p>{entry.text}</p>
              <small>{entry.date}</small>
            </div>
            <DeleteButton onClick={() => handleDeleteEntry(index)}>
              <FaTrash />
            </DeleteButton>
          </EntryCard>
        ))}
      </EntryList>
      </EntryForm>
    </DiaryContainer>
  );
}
