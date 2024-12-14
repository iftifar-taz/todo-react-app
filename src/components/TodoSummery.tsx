import { Todo } from "../types/todo";

interface TodoSummeryProps {
  todos: Todo[],
  onDeleteAllCompleted: () => void;
  onDeleteAll: () => void;
}

export default function TodoSummery({ todos, onDeleteAllCompleted, onDeleteAll }: TodoSummeryProps) {
  const completedTodos = todos.filter(x => x.completed);
  return (
    <div className="text-center space-y-2">
    <p className="text-sm font-medium">{completedTodos.length}/{todos.length} todos completed</p>
    {completedTodos.length > 0 && (
        <button className="text-red-500 hover:underline text-sm font-medium mr-2" onClick={onDeleteAllCompleted}>Delete all completed</button>
    )}
    {todos.length > 0 && (
        <button className="text-red-500 hover:underline text-sm font-medium" onClick={onDeleteAll}>Delete all</button>
    )}
    </div>
  );
}