import React from 'react';
import Layout from '../layout/Layout';
import routes from './routes';
import { RouterProvider } from "react-router-dom";

/*
Aqui en App le enviamos a laytour el routes, esto es porque el routes es el que maneja las ventanas.
Layout tiene como children el RouterProvider.
El RouterProvider es el motor de React Router que decide qué pantalla (o ruta) renderizar.

si en routes al pulsar en navbar le damos a company, routerprovider renderiza la ventana company 
y lo muestra layout.
*/

const App = () => {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
};

export default App;
