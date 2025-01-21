import Image from "next/image";
import FeatureItem from "./FeatureItem";

export default function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-20  text-center text-white">
      <div className="mb-12">
        {/* How This Works Styled Box */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 border-2 rounded-full text-sm font-semibold bg-transparent border-gradient-to-r from-pink-500 to-purple-500 text-white">
          <img
            src="/assets/logo/how-it-works.png"
            alt="How This Works Icon"
            className="w-5 h-5"
          />
          <span>How This Works</span>
        </div>

        {/* Title and Description */}
        <h2 className="text-4xl font-bold mt-4">
          Bagaimana <span className="text-purple-500">Learnium</span> Bekerja?
        </h2>
        <p className="mt-4 text-gray-400">
          Lihat bagaimana kami meningkatkan efisiensi belajar Anda
        </p>
      </div>

      {/* Features List */}
      <div className="flex justify-center items-center gap-8">
        <FeatureItem
          icon="/assets/images/unggah-document.png"
          title="Unggah Dokumen"
          description="Seret dan lepas file Anda, biarkan kami membantu menyederhanakan materi"
        />

        {/* arrow icon */}
        <div className="flex items-center">
          <Image
            src="/assets/logo/arrow-1.png"
            alt="Arrow Icon"
            width={50}
            height={50}
          />
        </div>

        <FeatureItem
          icon="/assets/images/ringkasan.png"
          title="Ringkasan Otomatis"
          description="Dalam sekejap file Anda diringkas menjadi bagian yang terstruktur"
        />

        {/* arrow icon */}
        <div className="flex items-center">
          <Image
            src="/assets/logo/arrow-1.png"
            alt="Arrow Icon"
            width={50}
            height={50}
          />
        </div>
        <FeatureItem
          icon="/assets/images/quiz.png"
          title="Uji Diri dengan Kuis"
          description="Uji seberapa baik Anda memahami materi dengan kuis interaktif"
        />
      </div>
    </section>
  );
}
