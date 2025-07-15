//NOTE: AQUI PONDREMOS LAS RUTAS DE NAVEGACION PARA ENTRAR A LAS VENTANAS

/*
por ejemplo, si queremos ir a la pagina instalacion, tendremos que importar la const
de la page instalacion.

import Instalaciones from "../pages/Registros/Instalaciones/Instalaciones";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<Home />} />,
    errorElement: <ErrorPage />,
  },
    {
    path: "/instalaciones",
    element: <PrivateRoute element={<Instalaciones />} />,
    errorElement: <ErrorPage />,
  },
]);
export default routes;
*/

import { createBrowserRouter } from "react-router-dom";
import Company from "../pages/Company/Company";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Company/>
  },
  {
    path: "/compañia",
    element: <Company/>
  }
]);

export default routes;

