import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[],
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onCompletedChange, onDelete }: TodoListProps) {
  todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });
  return (
    <>
      <div className="space-y-2">
        {todos.map(x => (
          <TodoItem key={x.id} todo={x} onCompletedChange={onCompletedChange} onDelete={onDelete} />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">No Todos yet.</p>
      )}
    </>
  );
}