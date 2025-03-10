import React, { useState, useEffect } from "react";
import {
  ListContainer,
  ListWrapper,
  ListLabel,
  ListCard,
  ListContent,
  AddButton,
  InputContainer,
  Input,
  TaskItem,
  Checkbox,
  TaskCounter,
  EmptyState,
  DeleteButton,
  CharacterCounter,
} from "./list";
import { FaTrash } from "react-icons/fa";

export default function List() {
  const MAX_CHARACTERS = 80;
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask.trim(), completed: false }]);
    setNewTask("");
  };

  const handleToggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <ListContainer>
      <ListLabel>📋 Minha Lista de Tarefas</ListLabel>
      <ListWrapper>
        <ListContent>
          <InputContainer>
            <Input
              type="text"
              value={newTask}
              onChange={(e) =>
                setNewTask(e.target.value.slice(0, MAX_CHARACTERS))
              }
              maxLength={MAX_CHARACTERS}
              placeholder="Adicione uma nova tarefa..."
            />
            <AddButton onClick={handleAddTask} disabled={!newTask.trim()}>
              Adicionar
            </AddButton>
          </InputContainer>
          <CharacterCounter>
            {newTask.length}/{MAX_CHARACTERS} caracteres
          </CharacterCounter>
          <TaskCounter>
            Concluídas:{" "}
            <span>{tasks.filter((task) => task.completed).length}</span> /{" "}
            <span>{tasks.length}</span>
          </TaskCounter>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <ListCard key={index}>
                <TaskItem completed={task.completed}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      flex: 1,
                    }}
                  >
                    <Checkbox
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(index)}
                    />
                    <span>{task.text}</span>
                  </div>
                  <DeleteButton onClick={() => handleDeleteTask(index)}>
                    <FaTrash />
                  </DeleteButton>
                </TaskItem>
              </ListCard>
            ))
          ) : (
            <EmptyState>
              🎉 Nenhuma tarefa pendente! Adicione uma nova.
            </EmptyState>
          )}
        </ListContent>
      </ListWrapper>
    </ListContainer>
  );
}
