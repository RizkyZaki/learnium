import Image from "next/image";
import SignInForm from "@/components/auth/SignInForm";

export default function LoginPage() {
  return (
    <div className="flex h-screen bg-[#0C0B27] text-white">
      {/* Illustration Section */}
      <div className="hidden md:flex flex-1 justify-center items-center relative">
        <div className="bg-purple-100 rounded-lg p-10 shadow-lg w-[600px] h-[750px] flex items-center justify-center relative">
          {/* Back Button */}
          <button className="absolute top-4 right-4 flex items-center space-x-2 bg-gray-800 bg-opacity-20 px-4 py-2 rounded-full shadow-md hover:bg-opacity-30">
            <span className="text-sm text-gray-100 font-medium">
              Kembali ke halaman utama
            </span>
            <Image
              src="/assets/logo/back.png"
              alt="Back Icon"
              width={16}
              height={16}
            />
          </button>

          {/* Illustration */}
          <Image
            src="/assets/images/login.png"
            alt="Login Illustration"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 ">
        <SignInForm />
      </div>
    </div>
  );
}
