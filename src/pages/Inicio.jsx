import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useNavigate } from "react-router-dom"
import FWD from '@/assets/FWD - Logotipo - Slogan_Slogan gris.avif'
import CertFront from '@/assets/frntend.jpg'
import CertBack from '@/assets/bckend.jpg'
import CertFull from '@/assets/bckend.jpg'
import { useState } from "react"
import { HiOutlineAcademicCap } from "react-icons/hi"
import { FaReact, FaPython, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux } from "react-icons/fa"
import { SiDjango, SiMysql, SiTailwindcss, SiJavascript, SiTypescript, SiVite, SiOpenai } from "react-icons/si"
import { FaCheckCircle } from "react-icons/fa"
import { Badge as ShadcnBadge } from "@/components/ui/badge"
import proyectos from "@/lib/proyectos";
import educacion from "@/lib/educacion";
import skillsAdicionales from "@/lib/skills";
import ProjectCard from "@/components/Inicio/ProjectCard";
import EducationCard from "@/components/Inicio/EducationCard";
import SkillsList from "@/components/Inicio/SkillsList";
import DiplomaModal from "@/components/Inicio/DiplomaModal";
import TechStack from "@/components/Inicio/TechStack";
import colorMap from "@/lib/colorMap";
import { tecnologias } from "@/lib/tecnologias";

function Inicio() {
  const navigate = useNavigate();
  const [modalImg, setModalImg] = useState(null);

  return (
    <article className="flex flex-col items-center justify-center min-h-[60vh] px-4 bg-gradient-to-b from-white via-blue-50 to-white">
      <header className="w-full flex flex-col items-center justify-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mt-12 mb-3 font-serif text-blue-900 drop-shadow-sm tracking-tight leading-tight">
          Allan José Vélez González
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 text-center mb-6 font-serif tracking-wide">
          Desarrollador FullStack
        </h2>
        <Separator className="w-full mb-6 bg-blue-200" />
        <div className="text-center flex flex-col">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base font-sans">
            <span className="text-gray-700 font-medium">Esparza, Puntarenas, Costa Rica</span>
            <span className="text-blue-400 font-bold">·</span>
            <a href="https://www.linkedin.com/in/allan-josé-vélez-gonzález" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="text-blue-400 font-bold">·</span>
            <span className="text-gray-700 font-medium">+506 84813021</span>
            <span className="text-blue-400 font-bold">·</span>
            <a href="mailto:velezalan34@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors">velezalan34@gmail.com</a>
          </div>
        </div>
        <Separator className="w-full mt-6 bg-gray-300" />
      </header>
      
      <section className="w-full max-w-3xl mx-auto mt-6 font-serif mb-16 animate-fade-in">
        <p className="text-xl text-gray-800 text-justify leading-relaxed tracking-wide mb-6 font-normal">
          Desarrollador Full Stack especializado en <span className="font-bold text-blue-700">React</span> y <span className="font-bold text-green-700">Django</span>, egresado de un bootcamp intensivo de 6 meses orientado al desarrollo web profesional. Con una base sólida en frontend moderno y un backend robusto en Python Django, incluyendo el uso de <span className="font-bold text-cyan-700">MySQL</span> como sistema de base de datos principal.
        </p>
        <p className="text-lg text-gray-700 text-justify leading-relaxed tracking-wide font-normal">
          Experiencia en proyectos reales, aplicaciones administrativas y sistemas de punto de venta. Apasionado por la creación de soluciones eficientes, escalables y centradas en el usuario, con un enfoque en código limpio, arquitectura clara y desarrollo profesional continuo.
        </p>
      </section>
      
      <Separator className="w-full mt-4 mb-12 bg-gray-300" />
      
      <section className="w-full max-w-6xl mx-auto mb-20 animate-fade-in">
        <h2 className="text-3xl font-bold mb-10 font-serif text-center text-blue-900 tracking-tight">
          Stack de Tecnologías
        </h2>
        <TechStack tecnologias={tecnologias} />
      </section>
      
      <Separator className="w-full mt-6 mb-12 bg-gray-200" />
      
      <section className="w-full max-w-5xl mx-auto mb-20 animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 font-serif text-center text-blue-900 tracking-tight">
          Skills Adicionales
        </h2>
        <SkillsList skills={skillsAdicionales} />
      </section>
      
      <Separator className="w-full mt-6 mb-12 bg-gray-200" />
      
      <section className="w-full max-w-7xl mx-auto mb-20 animate-fade-in">
        <h2 className="text-3xl font-bold mb-10 font-serif text-center text-blue-900 tracking-tight">
          Títulos y Educación
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {educacion.map((edu, i) => (
            <EducationCard key={i} edu={edu} onDiplomaClick={setModalImg} />
          ))}
        </div>
        <DiplomaModal img={modalImg} onClose={() => setModalImg(null)} />
      </section>
      
      <Separator className="w-full mt-6 mb-12 bg-gray-200" />
      
      <section className="text-center py-16 p-4 w-full max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 font-serif text-blue-900 tracking-tight">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} colorMap={colorMap} onClick={() => navigate(`/proyectos/${proyecto.id}`)} />
          ))}
        </div>
      </section>
    </article>
  )
}

export default Inicio 
