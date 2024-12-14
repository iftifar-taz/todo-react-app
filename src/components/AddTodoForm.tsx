import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const [title, setTitle] = useState("");

    function onTitleChange(title: string): void {
        setTitle(() => title);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (!title.trim()) {
            return;
        }
        onSubmit(title);
        onTitleChange("");
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input 
                className="rounded-s-md grow border border-gray-400 p-2"
                placeholder="New Item"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}/>
            <button className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800" type="submit">Add</button>
        </form>
    );
}