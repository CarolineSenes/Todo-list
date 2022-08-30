/**
 * On passe l'état (state) et l'envoie de l'action (dispatch)
 * dans unContext pour qu'ils dispo depuis n'importe quel composant
 * wrappé dans dans leurs .Provider (voir App.js).
 */

import { createContext } from 'react';

// state initial à valeur 'null'
// car on on récupère les valeurs du state et du dispatch depuis les composants wrappés dans le .Provider
export const TodoStateContext = createContext(null);
export const TodoDispatcherContext = createContext(null);