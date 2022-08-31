// composant similaire à AddTodo.jsx

import { useState } from "react";
import Button from "./Button";
import { useTodoDispatcher } from "../context/TodoContext";

export default function EditTodo({ todo }) {
  const [value, setValue] = useState(todo.content);

  // on utilise useTodoDispatcher pour modifier le state
  const dispatch = useTodoDispatcher();

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && value.length) {
      dispatch({
        type: "EDIT_TODO",
        id: todo.id,
        content: value,
      });
      setValue("");
    }
  }

  function handleClick() {
    if (value.length) {
      dispatch({
        type: "EDIT_TODO",
        id: todo.id,
        content: value,
      });
      setValue("");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-10">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <Button text="Sauvegarder" className="mr-15" onClick={handleClick} />
      <Button
        text="Annuler"
        className="mr-15"
        onClick={() =>
          dispatch({
            type: "TOGGLE_EDIT_TODO",
            id: todo.id,
          })
        }
      />
    </div>
  );
}
