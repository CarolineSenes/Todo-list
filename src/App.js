import { useReducer } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import ThemeContext from "./context/ThemeContext";
import { TodoStateContext, TodoDispatcherContext } from "./context/TodoContext";
import todoReducer from "./reducers/todoReducer";

function App() {
  /** State initial de "todoReducer".
   * useReducer() centralise l'état du composant
   * */
  const [state, dispatch] = useReducer(todoReducer, {
    // initialState : infos initiales à afficher au 1er rendu
    todoList: [],
    theme: "primary",
  });

  function addTodo(content) {
    dispatch({
      type: "ADD_TODO",
      content,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      id,
    });
  }

  function toggleTodo(id) {
    dispatch({
      type: "TOGGLE_TODO",
      id,
    });
  }

  function toggleTodoEdit(id) {
    dispatch({
      type: "TOGGLE_EDIT_TODO",
      id,
    });
  }

  function editTodo(id, content) {
    dispatch({
      type: "EDIT_TODO",
      id,
      content,
    });
  }

  function selectTodo(id) {
    dispatch({
      type: "SELECT_TODO",
      id,
    });
  }

  // Récupère la valeur de l'option du select (menu déroulant pour choisir le theme),
  // et dispatch la valeur au reducer (todoReducer.js).
  // Mais ce changement de theme n'est applicable pour le moment qu'aux éléments
  // qui l'utiliserait dans le composant présent. Les enfants ne sont pas concernés.
  // En wrappant avec <ThemeContext.Provider>, on modifie la valeur de "theme" dans le Context.
  function handleThemeChange(e) {
    dispatch({
      type: "SET_THEME",
      theme: e.target.value,
    });
  }

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatcherContext.Provider value={dispatch}>
        <ThemeContext.Provider value={state.theme}>
          <div className="d-flex justify-content-center align-items-center p-20">
            <div className="card container p-20">
              <h1 className="mb-20 d-flex justify-content-center align-items-center">
                <span className="flex-fill">Liste de tâches</span>
                {/* Select qui permet de changer le theme */}
                <select value={state.theme} onChange={handleThemeChange}>
                  <option value="primary">Rouge</option>
                  <option value="secondary">Bleu</option>
                </select>
              </h1>
              <AddTodo />
              <TodoList />
            </div>
          </div>
        </ThemeContext.Provider>
      </TodoDispatcherContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default App;
