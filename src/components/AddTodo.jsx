import { useState, useContext } from "react";
import Button from "./Button";
import { TodoDispatcherContext } from "../context/TodoContext";

export default function AddTodo() {
  // state local
  const [value, setValue] = useState("");

  // on utilise le dispatch centralisé "TodoDispatcherContext"
  const dispatch = useContext(TodoDispatcherContext);

  // A la frappe du user dans l'input d'Ajout de todo, la valeur est envoyée à "value" (=state local)
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  // Cas 1 de validation du user : touche "Enter" : on dispatch l'action ADD_TODO
  // pour ajouter la todo dans le store global de "TodoDispatcherContext" en transmettant "value" (=state local)
  function handleKeyDown(e) {
    if (e.key === "Enter" && value.length) {
      dispatch({
        type: 'ADD_TODO',
        content: value,
      });
      setValue('');
    }
  }

  // Cas 1 de validation du user : btn "Ajouter" : on dispatch l'action ADD_TODO
  // pour ajouter la todo dans le store global de "TodoDispatcherContext" en transmettant "value" (=state local)
  function handleClick() {
    if (value.length) {
      dispatch({
        type: 'ADD_TODO',
        content: value,
      });
      setValue('');
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-20">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <Button text="Ajouter" onClick={handleClick} />
    </div>
  );
}
