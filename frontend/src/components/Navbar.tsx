export default function Navbar() {
  return (
    <header className="w-full bg-white/70 backdrop-blur-sm fixed top-0 left-0 border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-semibold text-brand-dark">JobAlchemy</h1>
        <nav className="text-gray-600 space-x-6 text-sm">
          <a href="/" className="hover:text-brand-dark">Career Explorer</a>
          <a href="#" className="hover:text-brand-dark">Tracker</a>
          <a href="#" className="hover:text-brand-dark">CV Builder</a>
        </nav>
      </div>
    </header>
  );
}
