import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C0B27] shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo/logo.png"
            alt="Learnium Logo"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-2">
          <span className="text-white">John Doe</span>
          <Image
            src="/assets/logo/icon-user.png" 
            alt="User Icon"
            width={32}
            height={32}
          />
        </div>
      </div>
    </nav>
  );
}
