/**
 * Permet de regrouper les providers qui wrappent l'application, en 1 seul.
 * Ce qui rend App.js un peu plus lisible.
 */

import { useReducer } from "react";
import ThemeContext from "../context/ThemeContext";
import {
  TodoStateContext,
  TodoDispatcherContext,
} from "../context/TodoContext";
import todoReducer from "../reducers/todoReducer";

function TodoProvider({ children }) {
  /** State initial de "todoReducer".
   * useReducer() centralise l'état du composant
   * */
  const [state, dispatch] = useReducer(todoReducer, {
    // initialState : infos initiales à afficher au 1er rendu
    theme: "primary",
    todoList: [],
  });

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatcherContext.Provider value={dispatch}>
        <ThemeContext.Provider value={state.theme}>
          {children}
        </ThemeContext.Provider>
      </TodoDispatcherContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default TodoProvider;
