import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { useState, useEffect, useRef } from 'react';

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
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Duplicate items to create infinite effect
  const duplicatedTecnologias = [...tecnologias, ...tecnologias];

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setPosition((prevPosition) => {
          const newPosition = prevPosition - 1;
          // Reset position when reaching the end of original items
          if (-newPosition >= tecnologias.length * 100) {
            return 0;
          }
          return newPosition;
        });
      }
    };

    const animation = setInterval(animate, 30);
    return () => clearInterval(animation);
  }, [tecnologias.length, isPaused]);

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {/* Gradient overlay - left side */}
      <div className="absolute left-0 top-0 w-32 h-full z-10 bg-gradient-to-r from-transparent to-transparent"></div>
      
      {/* Gradient overlay - right side */}
      <div className="absolute right-0 top-0 w-32 h-full z-10 bg-gradient-to-l from-[#00000000] to-transparent"></div>
      
      {/* Scrolling container */}
      <div 
        className="flex py-4"
        style={{
          transform: `translateX(${position}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        {duplicatedTecnologias.map((tec, i) => {
          const techImg = getTechImage(tec.nombre);
          const Icon = getIconComponent(tec.icon);
          return (
            <div 
              key={i} 
              className="flex flex-col items-center mx-8 min-w-[100px] hover:scale-110 transition-all duration-300"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {techImg ? (
                <img 
                  src={techImg} 
                  alt={tec.nombre} 
                  className="w-12 h-12 mb-1 transition-all duration-300"
                />
              ) : (
                Icon && <Icon className={`text-5xl mb-1 ${tec.color} transition-all duration-300`} />
              )}
              <span className="text-sm font-semibold text-gray-700">{tec.nombre}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
