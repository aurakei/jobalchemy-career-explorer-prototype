// src/components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      location.pathname === path
        ? "text-white bg-brand"
        : "text-gray-700 hover:text-brand-dark hover:bg-brand/10"
    }`;

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-semibold text-brand-dark hover:text-brand"
        >
          JobAlchemy
        </Link>

        <nav className="space-x-4">
          <Link to="/" className={linkStyle("/")}>
            Home / Identity
          </Link>
          <Link to="/explorer" className={linkStyle("/explorer")}>
            Career Explorer
          </Link>
        </nav>
      </div>
    </header>
  );
}
