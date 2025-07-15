import type { NavBarAnchorProps } from "../../../types/navbarTypes";

//aqui creamos el componente que vva a mostrar cada enlace del meno:
//compañia
//instalacion
//tareas
//usuarios

//recibimos la url de la ventana, el icono del apartado y un texto "compañia"

const NavbarAnchor: React.FC<NavBarAnchorProps> = ({ href, icon, text}) => {

    return (
            <a
      href={href}
      className="flex items-center gap-x-2 rounded-md px-3 py-2 font-medium transition-colors duration-200 hover:bg-blue-company/10"
    >
      {icon}
      <p>{text}</p>
    </a>
    );
}

export default NavbarAnchor;
