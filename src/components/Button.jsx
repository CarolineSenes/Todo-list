import { useTodos } from "../context/TodoContext"

// On récupère les props "text", "className" et le reste des props "...props" (avec l'opérateur rest)
export default function Button({ text, className, ...props }) {
  const { theme } = useTodos();

  return (
    <button
      {...props}
      className={`btn btn-${theme} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}
