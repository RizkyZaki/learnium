import Image from "next/image";
import BenefitCard from "./BenefitsCard";

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-20 text-center text-white"
    >
      {/* Section Title */}
      <div className="mb-12">
        {/* Benefits Icon and Label */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 border-2 rounded-full text-sm font-semibold bg-transparent border-gradient-to-r from-pink-500 to-purple-500 text-white">
          <Image
            src="/assets/logo/benefits.png"
            alt="Benefits Icon"
            width={20}
            height={20}
          />
          <span>Benefits</span>
        </div>

        <h2 className="text-4xl font-bold mt-4">
          Mengapa <span className="text-purple-500">Learnium</span> Tepat untuk
          Anda?
        </h2>
      </div>

      {/* Benefits List */}
      <div className="flex flex-wrap justify-center gap-8">
        <BenefitCard
          icon="/assets/images/terstruktur.png"
          title="Terstruktur"
          description="Dengan auto-segmentasi, materi Anda akan dipecah menjadi bagian-bagian yang memudahkan arah proses belajar."
          gradient="from-pink-500 to-purple-500"
        />
        <BenefitCard
          icon="/assets/images/otomatis.png"
          title="Otomatis"
          description="Learnium secara otomatis menghasilkan kuis dari materi yang diunggah, membantu Anda mengukur pemahaman dengan cepat dan tepat."
          gradient="from-purple-500 to-blue-500"
        />
        <BenefitCard
          icon="/assets/images/fleksibel.png"
          title="Fleksibel"
          description="Belajar kapan saja dan di mana saja sesuai dengan kebutuhan memberi kebebasan penuh untuk menyesuaikan dengan aktivitas harian Anda."
          gradient="from-blue-500 to-purple-500"
        />
      </div>
    </section>
  );
}
