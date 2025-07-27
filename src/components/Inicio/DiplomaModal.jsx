function DiplomaModal({ img, onClose }) {
  if (!img) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
      <div className="relative">
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-white rounded-full shadow p-1 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors z-10" title="Cerrar">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <img src={img} alt="Diploma grande" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border-4 border-white animate-fade-in" />
      </div>
    </div>
  );
}

export default DiplomaModal; 
