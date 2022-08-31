import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";
import { useTodos } from '../context/TodoContext';


export default function TodoList() {
  // on utilise le state centralisé "TodoStateContext" 
  const state = useTodos();

  return state.todoList.length ? (
    <ul>
      {state.todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune tâche en cours</p>
  );
}
