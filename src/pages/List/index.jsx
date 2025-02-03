import React, { useState, useEffect } from "react";
import {
  ListContainer,
  ListWrapper,
  ListCard,
  ListHeader,
  ListContent,
  AddButton,
  Input,
  TaskItem,
  Checkbox,
} from "./list";

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

  return (
    <ListContainer>
      <ListWrapper>
        <ListHeader>
          <h1>📋 Minha Lista de Tarefas</h1>
        </ListHeader>
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
                </TaskItem>
              </ListCard>
            ))}
          </div>
        </ListContent>
      </ListWrapper>
    </ListContainer>
  );
}
