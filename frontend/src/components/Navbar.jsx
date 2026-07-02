function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 bg-white shadow-sm">

      <h1 className="text-2xl font-bold text-green-700">
        🌱 PlantCare AI
      </h1>

      <div className="flex gap-8">

        <a href="#" className="hover:text-green-600">
          Features
        </a>

        <a href="#" className="hover:text-green-600">
          About
        </a>

        <a href="#" className="hover:text-green-600">
          GitHub
        </a>

      </div>

    </nav>
  );
}

export default Navbar;