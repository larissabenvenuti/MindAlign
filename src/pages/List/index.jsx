import React, { useState, useEffect } from "react";
import {
  ListContainer,
  ListWrapper,
  ListLabel,
  ListCard,
  ListContent,
  AddButton,
  Input,
  TaskItem,
  Checkbox,
  TaskCounter,
  EmptyState,
  DeleteButton,
} from "./list";
import { FaTrash } from "react-icons/fa";

export default function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [...tasks, { text: newTask, completed: false }];
      setTasks(updatedTasks);
      setNewTask("");
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <ListContainer>
      <ListLabel>📋 Minha Lista de Tarefas</ListLabel>
      <ListWrapper>
        <ListContent>
          <div className="task-input">
            <Input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Adicione uma nova tarefa..."
            />
            <AddButton onClick={handleAddTask}>Adicionar</AddButton>
          </div>
          {totalTasks === 0 ? (
            <EmptyState>
              🎉 Nenhuma tarefa pendente! Adicione uma nova.
            </EmptyState>
          ) : (
            <>
              <TaskCounter>
                Concluídas: <span>{completedTasks}</span> /{" "}
                <span>{totalTasks}</span>
              </TaskCounter>
              <div className="task-list">
                {tasks.map((task, index) => (
                  <ListCard key={index}>
                    <TaskItem completed={task.completed}>
                      <Checkbox
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleTask(index)}
                      />
                      <span>{task.text}</span>
                      <DeleteButton onClick={() => handleDeleteTask(index)}>
                        <FaTrash />
                      </DeleteButton>
                    </TaskItem>
                  </ListCard>
                ))}
              </div>
            </>
          )}
        </ListContent>
      </ListWrapper>
    </ListContainer>
  );
}
