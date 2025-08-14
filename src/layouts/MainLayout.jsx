import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { BackgroundGrid } from '@/components/BackgroundGrid';

function MainLayout() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white animate-fade-in overflow-hidden">
      
      {/* Grid Pattern de fondo distribuido */}
      <BackgroundGrid opacity={30} />

      <nav className='w-full flex justify-center border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm sticky top-0 z-50'>
        <Navbar />
      </nav>

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
