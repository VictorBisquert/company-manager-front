import type { ReactNode } from "react";

//children tiene tipo ReactNode, eso es que recibe cualquier contenido React válido: texto, HTML, otros componentes.
//Layout es un componente contenedor que envuelve toda la app.

export interface LayoutProps {
  children: ReactNode;
}
