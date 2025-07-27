import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4 py-2">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/" className="font-semibold text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/proyectos" className="font-semibold text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100">Proyectos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/acerca-de-mi" className="font-semibold text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100">Acerca de mí</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/contacto" className="font-semibold text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100">Contacto</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
