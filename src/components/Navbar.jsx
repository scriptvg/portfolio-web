import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,

}   from 'lucide-react'
import { Button } from "@/components/ui/button";


function Navbar() {
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/proyectos", label: "Proyectos" },
    { to: "/acerca-de-mi", label: "Acerca de mí" },
    { to: "/contacto", label: "Contacto" },
  ];

  const linkClasses = (isActive) =>
    `font-semibold px-4 py-2 rounded-md transition-colors ${
      isActive
        ? "text-primary bg-gray-100 dark:bg-gray-700"
        : "text-gray-700 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700"
    }`;

  return (
    <nav className="flex justify-between items-center w-full bg-white dark:bg-gray-800 shadow-sm">
      {/* Logo / Branding */}


      {/* Navegación */}
      <NavigationMenu className="flex items-center gap-4 ml-12">
        <NavigationMenuList className="flex gap-2 py-2">
          {navLinks.map(({ to, label }) => (
            <NavigationMenuItem key={to}>
              <NavigationMenuLink asChild>
                <Link to={to} className={linkClasses(pathname === to)}>
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Botón de tema */}
      <div className="flex items-center gap-4 mr-12">
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Cambiar tema"
        >
          {theme === "dark" ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
