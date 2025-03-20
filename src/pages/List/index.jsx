import React, { useState, useEffect } from "react";
import {
  ListContainer,
  ListWrapper,
  TitleSection,
  ListCard,
  ListContent,
  AddButton,
  InputWrapper,
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
    const newTaskObject = {
      text: newTask.trim(),
      completed: false,
      id: Date.now(),
    };
    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    setNewTask("");
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ListContainer>
      <TitleSection>
        <h1>📋 Minha Lista de Tarefas</h1>
        <p>Anote suas tarefas e marque-as como concluídas quando desejar.</p>
      </TitleSection>
      <ListWrapper>
        <ListContent>
          <InputWrapper>
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
          </InputWrapper>
          <CharacterCounter>
            {newTask.length}/{MAX_CHARACTERS} caracteres
          </CharacterCounter>
          <TaskCounter>
            Concluídas:{" "}
            <span>{tasks.filter((task) => task.completed).length}</span> /{" "}
            <span>{tasks.length}</span>
          </TaskCounter>
          {tasks.length > 0 ? (
            tasks.map(({ id, text, completed }) => (
              <ListCard key={id}>
                <TaskItem completed={completed}>
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
                      checked={completed}
                      onChange={() => handleToggleTask(id)}
                      aria-label={`Marcar tarefa ${text} como ${
                        completed ? "não concluída" : "concluída"
                      }`}
                    />
                    <span>{text}</span>
                  </div>
                  <DeleteButton onClick={() => handleDeleteTask(id)}>
                    <FaTrash />
                  </DeleteButton>
                </TaskItem>
              </ListCard>
            ))
          ) : (
            <EmptyState>Nenhuma tarefa pendente! Adicione uma nova.</EmptyState>
          )}
        </ListContent>
      </ListWrapper>
    </ListContainer>
  );
}
