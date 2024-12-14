
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummery from "./components/TodoSummery";
import useTodos from "./hooks/useTodos";

export default function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    removeTodo,
    deleteAllCompleted,
    deleteAll,
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={removeTodo} />
      </div>
      <TodoSummery todos={todos} onDeleteAllCompleted={deleteAllCompleted} onDeleteAll={deleteAll}/>
    </main>
  )
}
