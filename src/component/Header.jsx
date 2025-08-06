export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
          Sonia<span className="text-blue-600">.dev</span>
        </h1>
        <nav className="space-x-6 text-gray-600 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition duration-200">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition duration-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition duration-200">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
