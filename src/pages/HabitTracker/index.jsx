import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FaTrash } from "react-icons/fa";
import {
  HabitTrackerContainer,
  HabitTrackerWrapper,
  TitleSection,
  InputWrapper,
  Input,
  AddButton,
  HabitTable,
  TableHeader,
  TableBody,
  TableRow,
  TableTitle,
  Checkbox,
  DeleteButton,
  EmptyState,
} from "./habittracker";

const daysOfWeek = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export default function HabitTracker() {
  const storedHabits = useMemo(() => {
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : [];
  }, []);

  const [habits, setHabits] = useState(storedHabits);
  const [habitName, setHabitName] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const handleAddHabit = useCallback(() => {
    const trimmedHabitName = habitName.trim();
    if (trimmedHabitName) {
      const newHabit = {
        name: trimmedHabitName,
        weekData: Array(7).fill(false),
      };
      setHabits((prev) => [newHabit, ...prev]);
      setHabitName("");
    }
  }, [habitName]);

  const handleToggleCheckbox = useCallback((habitIndex, dayIndex) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].weekData[dayIndex] = !updatedHabits[habitIndex].weekData[dayIndex];
    setHabits(updatedHabits);
  }, [habits]);

  const handleDeleteHabit = useCallback((index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  }, [habits]);

  return (
    <HabitTrackerContainer>
      <TitleSection>
        <h1>🎯 Rastreamento de Hábitos</h1>
        <p>Monitore seus hábitos diários aqui.</p>
      </TitleSection>

      <HabitTrackerWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Adicionar novo hábito"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
          />
          <AddButton onClick={handleAddHabit} disabled={!habitName.trim()}>
            Adicionar
          </AddButton>
        </InputWrapper>

        <HabitTable>
          <TableHeader>
            <TableRow>
              <TableTitle>Hábito</TableTitle>
              {daysOfWeek.map((day) => (
                <TableTitle key={day}>{day}</TableTitle>
              ))}
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {habits.length === 0 ? (
              <EmptyState>Sem hábitos cadastrados. Adicione um hábito!</EmptyState>
            ) : (
              habits.map((habit, habitIndex) => (
                <TableRow key={habit.name}>
                  <TableTitle>
                    {habit.name}
                    <DeleteButton onClick={() => handleDeleteHabit(habitIndex)}>
                      <FaTrash />
                    </DeleteButton>
                  </TableTitle>
                  {habit.weekData.map((checked, dayIndex) => (
                    <TableTitle key={dayIndex}>
                      <Checkbox
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleToggleCheckbox(habitIndex, dayIndex)}
                      />
                    </TableTitle>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </HabitTable>
      </HabitTrackerWrapper>
    </HabitTrackerContainer>
  );
}
