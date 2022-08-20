import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

// On récupère les props "text", "className" et le reste des props "...props" (avec l'opérateur rest)
export default function Button({ text, className, ...props }) {
  const theme = useContext(ThemeContext);

  return (
    <button
      {...props}
      className={`btn btn-${theme} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}
