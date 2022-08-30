/**
 * Le state initial est définit dans App.js
 */

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        // on créé une copie du state (avec toutes ses propriétés : todoList et theme)
        // (il n'est accessible qu'en lecture, on ne peut donc pas le modifier directement)
        ...state,
        // on créé une copie du tableau de l'état actuel de "todoList"
        // et on ajoute une nouvelle todo avec ses propriétés
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(), //crypto.randomUUID() : génère un id unique de manière native
            content: action.content, // récupère ce qui est passé en paramètre de addTodo quand la fct est utilisée (ex: voir AddTodo.jsx -> fct handleClick)
            edit: false,
            done: false,
            selected: false,
          },
        ],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
        // action.id fait référence au paramère de "function deleteTodo" dans App.js (qui représente le payload de l'action)
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id !== action.id ? todo : { ...todo, done: !todo.done }
        ),
      };
    }
    case "TOGGLE_EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id !== action.id ? todo : { ...todo, edit: !todo.edit }
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map(
          (todo) =>
            todo.id !== action.id
              ? todo
              : { ...todo, content: action.content, edit: false }
          // action.content fait référence au paramère de "function editTodo" dans App.js (qui représente le payload de l'action)
        ),
      };
    }
    case "SELECT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id !== action.id
            ? { ...todo, selected: false }
            : { ...todo, selected: true }
        ),
      };
    }
    case "SET_THEME": {
      return {
        ...state,
        theme: action.theme,
        // action.theme fait référence au paramère de "function handleThemeChange" dans App.js (qui représente le payload de l'action)
      };
    }
    default: {
      throw new Error("action inconnue");
    }
  }
}

export default todoReducer;
