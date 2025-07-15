//AQUI CREAMOS EL TIPO O EL FORMATO DE LO QUE TIENE QUE RECIBIR NAVBAR

import type { ReactNode } from "react";

//declaramos lo que va a recibir el componente navbaranchor
export interface NavBarAnchorProps {
  href: string;
  icon?: ReactNode;
  text: string;
}
