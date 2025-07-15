import { Building, BookCheck, User, Building2 } from "lucide-react";
import NavbarAnchor from "./NavbarAnchor/NavbarAnchor";

const Navbar = () => {
    const iconSize = 24;

    return (
        <aside className="fixed left-0 h-screen w-64 flex-col justify-between border-r bg-white p-4 sm:flex">
            <nav className="flex flex-col space-y-1">
            <NavbarAnchor 
              href="/compañia"
              icon= {<Building2 size={iconSize} />}
              text="compañias"
            />
            <NavbarAnchor 
              href="/compañia"
              icon= {<Building size={iconSize} />}
              text="instalaciones"
            />
            <NavbarAnchor 
              href="/compañia"
              icon= {<BookCheck size={iconSize} />}
              text="tareas"
            />
            <NavbarAnchor 
              href="/compañia"
              icon= {<User size={iconSize} />}
              text="Trabajadores"
            />
            </nav>
        </aside>
    );
};

export default Navbar;