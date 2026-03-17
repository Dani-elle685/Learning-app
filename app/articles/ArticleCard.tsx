import Image from "next/image";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
}

export const ArticleCard = ({
  title,
  description,
  image,
}: ArticleCardProps) => {
  return (
    <div className="border rounded-md h-fit overflow-hidden">
      <Image
        src={image ?? ""}
        alt={title}
        width={400}
        height={200}
        className="w-full object-cover"
      />

      <div className="p-3">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};