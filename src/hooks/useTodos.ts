import { useState, useEffect } from "react";
import { dummyData } from "../data/todos";
import { Todo } from "../types/todo";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean): void {
    setTodos((prevTodos) => prevTodos.map(x => x.id === id ? { ...x, completed } : x));
  }

  function addTodo(title: string): void {
    setTodos((prevTodos) => [{
      id: prevTodos.length + 1,
      title: title,
      completed: false
    },
    ...prevTodos]);
  }

  function removeTodo(id: number): void {
    setTodos((prevTodos) => prevTodos.filter(x => x.id !== id));
  }

  function deleteAllCompleted(): void {
    setTodos((prevTodos) => prevTodos.filter(x => !x.completed));
  }

  function deleteAll(): void {
    setTodos(() => []);
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    removeTodo,
    deleteAllCompleted,
    deleteAll,
  };
}