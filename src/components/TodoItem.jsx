// On récupère les props passées en prop drilling depuis App.js
export default function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo,
  selectTodo,
}) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-10 d-flex justify-content-center align-items-center p-10 ${
        todo.selected ? "selected" : ""
      }`}
    >
      <span className="flex-fill">
        {todo.content} {todo.done && "✅"}
      </span>
      <button
        className="btn btn-primary mr-15"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
      >
        Valider
      </button>
      <button
        className="btn btn-primary mr-15"
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
      >
        Modifier
      </button>
      <button
        className="btn btn-reverse-primary"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      >
        Supprimer
      </button>
    </li>
  );
}
