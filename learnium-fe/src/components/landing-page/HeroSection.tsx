import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative text-center py-20 ">
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl mt-20 font-extrabold text-white">
          Ringkas, Pahami, Kuasai
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Transformasi cara belajar dengan ringkasan otomatis dan kuis yang
          membantu Anda menguasai pemahaman.
        </p>
        <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90">
          Get Started
        </button>
      </div>

      {/* Illustration */}
      <div className="relative mt-12 flex justify-center">
        <Image
          src="/assets/images/ilustration.png"
          alt="Hero Illustration"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
}
