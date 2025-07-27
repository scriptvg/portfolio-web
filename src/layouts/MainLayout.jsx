import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLayout({ children }) {
  return (
    <>
      <nav className='w-full flex justify-center border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm sticky top-0 z-50' >
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout 
