import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  function handleChange(e) {
    const inputValue = e.target.value;
    setTodo(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && todo.length) {
      handleClick();
    }
  }

  function handleClick() {
    if (todo.length) {
      addTodo(todo); //on appelle le setter du parent ("TodoList") passé en props
      setTodo("");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-20">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={todo}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleClick} className="btn btn-primary">
        Ajouter
      </button>
    </div>
  );
}
