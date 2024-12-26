export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">GameZone</h1>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
            Login
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

