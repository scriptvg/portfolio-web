import { Separator } from "@/components/ui/separator"

function AcercaDeMi() {
  return (
    <section className="w-full min-h-screen px-4 py-20 bg-gradient-to-b from-white via-blue-50 to-white animate-fade-in">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-blue-900 text-center drop-shadow-sm mb-4">
          Allan José Vélez González
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 text-center mb-6 font-serif">
          Desarrollador FullStack
        </h2>

        <Separator className="w-full mb-4 bg-blue-200" />

        <div className="text-center flex flex-wrap justify-center gap-x-3 gap-y-1 text-base font-sans mb-6">
          <span className="text-gray-700 font-medium">Esparza, Puntarenas, Costa Rica</span>
          <span className="text-blue-400 font-bold">·</span>
          <a href="https://www.linkedin.com/in/allan-josé-vélez-gonzález" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="text-blue-400 font-bold">·</span>
          <span className="text-gray-700 font-medium">+506 84813021</span>
          <span className="text-blue-400 font-bold">·</span>
          <a href="mailto:velezalan34@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">
            velezalan34@gmail.com
          </a>
        </div>

        <Separator className="w-full mb-10 bg-gray-300" />

        <div className="w-full space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed text-justify font-serif">
            ¡Hola! Soy Allan José Vélez González, un apasionado desarrollador full stack de Esparza, Puntarenas, Costa Rica. Desde pequeño sentí curiosidad por cómo funcionaban las cosas, pero fue en la adolescencia cuando descubrí el mundo de la programación y supe que quería dedicarme a esto.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed text-justify font-serif">
            Mi historia con la tecnología comenzó con la fascinación por los videojuegos y la informática. Empecé a investigar, a experimentar con pequeños scripts y páginas web, y pronto me di cuenta de que programar no solo era resolver problemas, sino también crear, imaginar y construir soluciones que pueden impactar la vida de las personas.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed text-justify font-serif">
            A lo largo de mi formación, he tenido la oportunidad de participar en proyectos reales, tanto en equipo como de manera individual. Cada reto, cada error y cada logro me han enseñado la importancia de la perseverancia, la curiosidad y el aprendizaje continuo.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed text-justify font-serif">
            Me motiva la posibilidad de transformar ideas en productos útiles, de automatizar procesos y de aportar valor a través del software. Mis ambiciones profesionales son claras: quiero seguir creciendo como desarrollador, especializarme en tecnologías modernas como <span className="font-bold text-blue-700">React</span> y <span className="font-bold text-green-700">Django</span>, y contribuir a proyectos innovadores que tengan impacto social y tecnológico.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed text-justify font-serif">
            La programación es para mí más que una carrera: es una pasión, una forma de pensar y una herramienta para cambiar el mundo. Estoy convencido de que el futuro pertenece a quienes se atreven a crear, a equivocarse y a mejorar cada día.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AcercaDeMi
