import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0C0B27] py-8 text-center text-white">
      {/* Logo dan Navigation */}
      <div className="flex justify-between items-center container mx-auto px-6 border-b border-gray-700 pb-4">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <Image
            src="/assets/logo/logo.png"
            alt="Learnium Logo"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li className="hover:text-gray-400">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#how-it-works">How This Works</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#benefits">Benefits</a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 mt-4">
        &copy; {currentYear}, Learnium. All Rights Reserved.
      </p>
    </footer>
  );
}
