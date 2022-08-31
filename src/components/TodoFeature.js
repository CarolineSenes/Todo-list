import { useTodoDispatcher, useTodos } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoFeature() {
  const dispatch = useTodoDispatcher();
  const state = useTodos();

  // Récupère la valeur de l'option du select (menu déroulant pour choisir le theme),
  // et dispatch la valeur au reducer (todoReducer.js).
  // Mais ce changement de theme n'est applicable pour le moment qu'aux éléments
  // qui l'utiliserait dans le composant présent. Les enfants ne sont pas concernés.
  // En wrappant avec <ThemeContext.Provider>, on modifie la valeur de "theme" dans le Context.
  function handleChange(e) {
    dispatch({
      type: "SET_THEME",
      theme: e.target.value,
    });
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20 d-flex flex-row justify-content-center align-items-center">
          <span className="flex-fill">Todo list</span>
          <select value={state.theme} onChange={handleChange}>
            <option value="primary">Rouge</option>
            <option value="secondary">Bleu</option>
          </select>
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoFeature;
