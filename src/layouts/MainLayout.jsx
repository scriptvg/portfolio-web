import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { GridPattern } from '@/components/magicui/grid-pattern';

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white animate-fade-in overflow-hidden">
      
      {/* Grid Pattern de fondo distribuido */}
      <GridPattern
        squares={[
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
        ]}
        className="fixed inset-0 w-full h-full opacity-30 pointer-events-none grid-pattern-hover"
        style={{
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
        }}
      />

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
