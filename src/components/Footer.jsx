import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-100 via-white to-blue-50 border-t border-blue-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="text-sm text-gray-600 text-center md:text-left">
          © {new Date().getFullYear()} Allan José Vélez González · Desarrollador FullStack
        </div>
        <div className="flex items-center gap-4 justify-center">
          <a href="https://www.linkedin.com/in/allan-josé-vélez-gonzález" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-blue-700 hover:text-blue-900 transition-colors text-xl">
            <FaLinkedin />
          </a>
          <a href="mailto:velezalan34@gmail.com" title="Email" className="text-blue-700 hover:text-blue-900 transition-colors text-xl">
            <FaEnvelope />
          </a>
          <a href="https://github.com/scriptvg" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-blue-700 hover:text-blue-900 transition-colors text-xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
