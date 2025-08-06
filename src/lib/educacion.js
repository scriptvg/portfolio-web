// Importación de logos e imágenes de certificados
import FWD from '@/assets/FWD - Logotipo - Slogan_Slogan gris.avif';
import CertFront from '@/assets/frntend.jpg';
import CertBack from '@/assets/bckend.jpg';
import CertFull from '@/assets/bckend.jpg';

// Rutas a los archivos PDF (se acceden desde la carpeta public)
// Nota: Los PDFs deben estar en la carpeta public para ser accesibles directamente

// Array de datos de educación con títulos, certificados e información académica
const educacion = [
  {
    titulo: "Bootcamp Full FrontEnd Developer",
    institucion: "Forward Tech & Freedom",
    periodo: "Enero 2025 – Marzo 2025",
    descripcion: "Curso intensivo de 3 meses enfocado en desarrollo Frontend profesional con React, HTML, CSS y JavaScript. Incluyó proyectos prácticos y trabajo en equipo.",
    color: "blue-400",
    textColor: "text-blue-700",
    img: FWD, // Logo de la institución
    diploma: CertFront, // Imagen del certificado
    pdfCertificado: "/Allan_Vélez_González_-_FrontEnd.pdf" // PDF del certificado para descarga
  },
  {
    titulo: "Bootcamp Full BackEnd Developer",
    institucion: "Forward Tech & Freedom",
    periodo: "Abril 2025 – Julio 2025",
    descripcion: "Curso intensivo de 3 meses enfocado en desarrollo Backend profesional con Django, MySQL y metodologías ágiles. Incluyó proyectos prácticos y trabajo en equipo.",
    color: "blue-400",
    textColor: "text-blue-700",
    img: FWD, // Logo de la institución
    diploma: CertBack, // Imagen del certificado
    pdfCertificado: "/Allan_Jose_Velez_Gonzalez_-_FullStack.pdf" // PDF del certificado FullStack para Backend
  },
  {
    titulo: "Bootcamp Full Stack Developer",
    institucion: "Forward Tech & Freedom",
    periodo: "Enero 2025 – Junio 2025",
    descripcion: "Certificación obtenida tras completar los bootcamps de Frontend y Backend, desarrollando aplicaciones completas y participando en proyectos integrales.",
    color: "blue-400",
    textColor: "text-blue-700",
    img: FWD, // Logo de la institución
    diploma: CertFull, // Imagen del certificado
    pdfCertificado: "/Allan_Jose_Velez_Gonzalez_-_FullStack.pdf" // PDF del certificado para descarga
  },
];

export default educacion;
