import { Heart } from "lucide-react";
import Image from "next/image";

interface CategoryBlockProps {
  title: string;
  location: string;
  image: string;
}
const CategoryBlock = ({ clinic }: { clinic: CategoryBlockProps }) => {
  return (
    <div className="relative w-[280px]">
      <Image
        width={1920}
        height={1080}
        alt="Category Image"
        src={clinic.image}
        className="bject-cover w-[280px] h-[280px] rounded-2xl"
      />
      <Heart className="text-background absolute top-4 right-4 cursor-pointer" />
      <div className="mt-3">
        <p className="font-medium text-base">{clinic.title}</p>
        <p className="text-base text-muted-foreground truncate">
          {clinic.location}
        </p>
      </div>
    </div>
  );
};

export default CategoryBlock;
