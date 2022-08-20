import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [theme, setTheme] = useState("primary");

  function addTodo(content) {
    //crypto.randomUUID() : génère un id unique de manière native
    const todo = {
      id: crypto.randomUUID(),
      done: false,
      edit: false,
      selected: false,
      content,
    };
    setTodoList([...todoList, todo]);
    //met à jour le tableau "toodoList" et ajoute une nouvelle "todo" avec ses propriétés
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function toggleTodoEdit(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
  }

  function editTodo(id, content) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, edit: false, content } : todo
      )
    );
  }

  function selectTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? { ...todo, selected: !todo.selected }
          : { ...todo, selected: false }
      )
    );
  }

  // Récupère la valeur de l'option du select
  // et de mettre à jour le state local "theme" grâce à son setter "setTheme"
  // Mais ce changement de theme n'est applicable pour le moment qu'aux éléments
  // qui l'utiliserait dans le composant présent. Les enfants ne sont pas concernés.
  // En wrappant avec <ThemeContext.Provider>, on modifie la valeur de "theme" dans le Context.
  function handleThemeChange(e) {
    setTheme(e.target.value);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="d-flex justify-content-center align-items-center p-20">
        <div className="card container p-20">
          <h1 className="mb-20 d-flex justify-content-center align-items-center">
            <span className="flex-fill">Liste de tâches</span>
            {/* Select qui permet de changer le theme */}
            <select value={theme} onChange={handleThemeChange}>
              <option value="primary">Rouge</option>
              <option value="secondary">Bleu</option>
            </select>
          </h1>
          <AddTodo addTodo={addTodo} />
          {/* On passe les props aux enfants */}
          <TodoList
            todoList={todoList}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            toggleTodoEdit={toggleTodoEdit}
            editTodo={editTodo}
            selectTodo={selectTodo}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
