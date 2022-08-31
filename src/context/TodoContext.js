import { createContext, useContext } from 'react';

/**
 * On passe l'état (state) et l'envoie de l'action (dispatch)
 * dans un Context pour qu'ils soient dispo depuis n'importe quel composant
 * wrappé dans leurs .Provider (voir App.js).
 * 
 * State initial à valeur 'null'
 * car on on récupère les valeurs du state et du dispatch depuis les composants wrappés dans le .Provider
 */
export const TodoStateContext = createContext(null);
export const TodoDispatcherContext = createContext(null);

/**
 * Fonctions qui permettent de récupérer plus facilement la valeur
 * des Contexts dans les composants.
 * Evitent d'importer dans les composants qui ont besoin de la valeur du state :
 * useContext() et TodoStateContext.
 * On importera plus que useTodos() ou useTodoDispatcher().
 */
export const useTodos = () => useContext(TodoStateContext);
export const useTodoDispatcher = () => useContext(TodoDispatcherContext);