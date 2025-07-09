//NOTE: configuración de Redux. Es donde guardamos el estado de toda la app.
//Traemos todos los slices de cada objeto (compañia, instalación, usuarios, tareas)
//Creamos un reducer con todos los slices, asi la app entera puede acceder a todos esos datos en un solo lugar.




/*
NOTE: Tipos de RootState y AppDispatch
creamos un type rootstate para poder usar todos los datos en la aplicacion
*export type RootState = ReturnType<typeof store.getState>;
con esto podriamos hacer un state.company por ejemplo y nos podriamos traer en cualquier sitio de la app los datos de company
es el esquema de TODO lo que hay guardado en store.
*/

/*
dispatch es lo que se usa para enviar acciones a Redux
con dispatch llamamos al slice y este al service, para que haga la peticion
*export type AppDispatch = typeof store.dispatch;
*/

/*
AppThunk es el tipo de funciones asíncronas (thunks) para Redux.
 Sirve para escribir acciones que:
Pueden esperar, pueden hacer llamadas a APIs..
para escribir funciones asíncronas que usan Redux
*export type AppThunk<ReturnType = void> = ThunkAction<
  *ReturnType,
  *RootState,
  *unknown,
  *Action<string>
*>;
*/
import { configureStore } from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";
import company from "../features/company/companySlice";

export const store = configureStore({
  reducer: {
    company,
  },
});

// NOTE: Tipos de RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;