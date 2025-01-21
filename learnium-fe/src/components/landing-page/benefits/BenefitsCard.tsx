import Image from "next/image";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export default function BenefitCard({ icon, title, description, gradient }: BenefitCardProps) {
  return (
    <div className="relative bg-gray-900 border border-gray-700 rounded-lg p-6 w-[300px] text-left">
      {/* Tab with Gradient */}
      <div
        className={`absolute -top-4 left-6 px-4 py-1 text-white text-sm font-semibold rounded-t-lg bg-gradient-to-r ${gradient}`}
      >
        {title}
      </div>
      {/* Icon */}
      <Image src={icon} alt={title} width={64} height={64} className="mb-4" />
      {/* Description */}
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
