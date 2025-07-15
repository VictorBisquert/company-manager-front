//NOTE: AQUI VA LA VENTANA PRINCIPAL, DONDE TENDREMOS EL MENU Y NAVEGAREMOS ENTRE LAS OPCIONES
import React from "react";
import type { LayoutProps } from "../types/layoutTypes";
import Navbar from "../components/Navbar/Navbar";

/*
Recibimos children, como hemos definido en el taype
children es lo que esté entre las etiquetas <Layout> y </Layout> cuando se use. (en App.tsx)
- Aqui mostramos el navbar, que va en el lateral de la pagina y el children que es donde cargaremos
el resto de componenetes. por eso navbar es fijo que es el menu children es dinamico, puede ser la 
pagina compañia, instalacion, usuario...
*/

const Layout: React.FC<LayoutProps> = ({ children }) => { 

  return (
    <>
    <div className="">
        <Navbar />
    </div>                                    
    <main className="min-h-screen space-y-4 bg-gray-company p-4 font-inter-regular pl-64">
        {children}
    </main>

    </>
  );
};

export default Layout;