function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">H</div>
        <span className="text-blue-600 text-xl font-bold">HireHub</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-6 list-none">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">About</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">SignUp</button>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">Login</button>
      </div>

    </div>
  );
}

export default Navbar;