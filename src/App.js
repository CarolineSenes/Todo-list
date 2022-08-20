import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todoList, setTodoList] = useState([]);

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

  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20">Liste de tâches</h1>
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
  );
}

export default App;
