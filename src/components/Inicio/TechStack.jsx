import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// Importa todas las imágenes SVG de assets
const techImages = import.meta.glob('../../assets/*.svg', { eager: true, import: 'default' });

function getIconComponent(iconName) {
  return FaIcons[iconName] || SiIcons[iconName] || null;
}

function getTechImage(nombre) {
  const lowerNombre = nombre.toLowerCase();

  // Caso especial para OpenAI: priorizar OpenAI_light.svg
  if (lowerNombre === "openai") {
    const openaiLight = Object.entries(techImages).find(([path]) =>
      path.toLowerCase().endsWith('/openai_light.svg')
    );
    if (openaiLight) return openaiLight[1];
  }

  // Busca SVG que contenga el nombre (ej: "react" en "react.svg", "React_dark.svg", etc.)
  const matches = Object.entries(techImages).filter(([path]) =>
    path.toLowerCase().includes(`/${lowerNombre}`)
  );

  if (matches.length === 0) return null;

  // Prioriza el archivo exacto (sin sufijos como _dark/_light)
  const exact = matches.find(([path]) =>
    path.toLowerCase().endsWith(`/${lowerNombre}.svg`)
  );
  return (exact || matches[0])[1];
}

function TechStack({ tecnologias }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {tecnologias.map((tec, i) => {
        const techImg = getTechImage(tec.nombre);
        const Icon = getIconComponent(tec.icon);
        return (
          <div key={i} className="flex flex-col items-center">
            {techImg ? (
              <img src={techImg} alt={tec.nombre} className="w-12 h-12 mb-1" />
            ) : (
              Icon && <Icon className={`text-5xl mb-1 ${tec.color}`} />
            )}
            <span className="text-sm font-semibold text-gray-700">{tec.nombre}</span>
          </div>
        );
      })}
    </div>
  );
}

export default TechStack; 
