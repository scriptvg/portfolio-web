// Componente reutilizable para el fondo con patrón de cuadrícula
// Propiedades personalizables:
// - squares: Array de coordenadas para los cuadrados
// - opacity: Opacidad del patrón (0-100)
// - className: Clases adicionales de Tailwind
// - style: Estilos adicionales de CSS

import { GridPattern } from '@/components/magicui/grid-pattern'

export function BackgroundGrid({ 
  squares = [
    [4, 4],
    [5, 1],
    [8, 2],
    [5, 3],
    [5, 5],
    [10, 10],
    [12, 15],
    [15, 10],
    [10, 15],
    [15, 10],
    [10, 15],
    [15, 10],
  ],
  opacity = 30,
  className = "",
  style = {}
}) {
  return (
    <GridPattern
      squares={squares}
      className={`fixed inset-0 w-full h-full pointer-events-none grid-pattern-hover opacity-${opacity} ${className}`}
      style={{
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
        ...style
      }}
    />
  )
}
