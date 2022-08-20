import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
  editTodo,
  selectTodo
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            editTodo={(content) => editTodo(todo.id, content)}
            cancelEditTodo={() => toggleTodoEdit(todo.id)}
          />
        ) : (
          <TodoItem
          // On récupère les props de App.js et on les passe à l'enfant TodoItem (prop drilling)
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
            editTodo={() => toggleTodoEdit(todo.id)}
            selectTodo={() => selectTodo(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune tâche en cours</p>
  );
}
