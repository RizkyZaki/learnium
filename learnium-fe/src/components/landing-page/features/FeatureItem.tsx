import Image from "next/image";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={icon} alt={title} width={80} height={80} />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}
