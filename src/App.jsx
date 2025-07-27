import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from '@/pages/Inicio'
import Proyectos from '@/pages/Proyectos'
import AcercaDeMi from '@/pages/AcercaDeMi'
import Contacto from '@/pages/Contacto'
import ProyectoDetalle from '@/pages/ProyectoDetalle'
import MainLayout from './layouts/MainLayout'
import '@/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Inicio />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="proyectos/:id" element={<ProyectoDetalle />} />
          <Route path="acerca-de-mi" element={<AcercaDeMi />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
