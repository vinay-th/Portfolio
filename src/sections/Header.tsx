export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed z-10 top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Project
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#"
          className="nav-item text-gray-900 bg-white hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
