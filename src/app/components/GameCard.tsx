import Link from "next/link";

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function GameCard ({ title, description, imageUrl, url } : GameCardProps){
  return (
    <Link href={"/" + url}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:cursor-pointer hover:bg-blue-100 hover:text-white">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};
