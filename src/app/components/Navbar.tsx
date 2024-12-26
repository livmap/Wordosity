export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      <img src={'/images/logo.png'} alt={"Logo"} className="h-10 object-cover" />
        <div className="space-x-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
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

