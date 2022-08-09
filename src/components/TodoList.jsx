import TodoItem from "./TodoItem";

export default function TodoList({ todoList, deleteTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </ul>
  ) : (
    <p>Aucune tâche en cours</p>
  );
}
