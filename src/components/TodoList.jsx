import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
            editTodo={() => toggleTodoEdit(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune tâche en cours</p>
  );
}
