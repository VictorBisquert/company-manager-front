/*
Aqui llamamos a estas dos funciones en la app.

Creamos 2 funciones personalizadas (hooks) para Redux:
useAppDispatch
useAppSelector

Son versiones mejoradas de los hooks normales de Redux.
-----------------
useAppDispatch es como:

Botón para enviar cambios al store, pero con reglas claras.

useAppSelector sirve para leer datos del store
con el podemos llamar al state.company y traer los datos

NOTE: Hooks tipados para usar en componentes
*export const useAppDispatch = () => useDispatch<AppDispatch>();
*export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
*/

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;