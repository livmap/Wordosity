import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <img src={'/images/logo.png'} alt={"Logo"} className="h-10 object-cover" />
        </Link>
      
        <div className="space-x-4">
          <button className="bg-lightbackblue text-white px-4 py-2 rounded hover:bg-babyblue">
            Login
          </button>
          <button className="bg-lightbackblue text-white px-4 py-2 rounded hover:bg-babyblue">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

