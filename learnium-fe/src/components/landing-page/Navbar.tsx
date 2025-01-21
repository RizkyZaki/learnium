import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C0B27] shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="#home">
            <Image
              src="/assets/logo/logo.png"
              alt="Learnium Logo"
              width={120}
              height={120}
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li className="hover:text-gray-400">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="#how-it-works">How This Works</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="#benefits">Benefits</Link>
          </li>
        </ul>

        {/* Sign In and Sign Up Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="#signin" className="text-white hover:text-gray-400">
            Sign in
          </Link>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:opacity-90">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
