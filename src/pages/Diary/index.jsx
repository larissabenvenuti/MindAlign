import React, { useState, useEffect } from "react";
import { DiaryContainer, EntryForm, EntryList, EntryCard } from "./diary";

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
      setEntries([{ text, date: new Date().toLocaleDateString() }, ...entries]);
      setText("");
    }
  };

  return (
    <DiaryContainer>
      <h1>📖 Meu Diário</h1>
      <EntryForm>
        <textarea
          placeholder="Escreva seu pensamento..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddEntry}>Adicionar</button>
      </EntryForm>
      <EntryList>
        {entries.map((entry, index) => (
          <EntryCard key={index}>
            <p>{entry.text}</p>
            <small>{entry.date}</small>
          </EntryCard>
        ))}
      </EntryList>
    </DiaryContainer>
  );
}
