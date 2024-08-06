"use client";

import { CLINIC_CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory =
    searchParams.get("category") || CLINIC_CATEGORIES[0].category.toLowerCase();
  const location = searchParams.get("location");

  return (
    <div className="flex gap-6 overflow-x-auto w-screen paddingX">
      {CLINIC_CATEGORIES.map((category, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col gap-2 items-center cursor-pointer group hover:border-b-2 pb-2",
            {
              "border-b-2 border-b-black/80":
                selectedCategory == category.category.toLowerCase(),
            }
          )}
          onClick={() =>
            router.push(
              `/?location=${
                location || ""
              }&category=${category.category.toLowerCase()}`
            )
          }
        >
          <category.icon
            className={cn(
              "w-5 h-5 text-muted-foreground group-hover:text-foreground",
              {
                "text-foreground":
                  selectedCategory == category.category.toLowerCase(),
              }
            )}
          />
          <p
            className={cn(
              "text-muted-foreground text-sm group-hover:text-foreground",
              {
                "text-foreground":
                  selectedCategory == category.category.toLowerCase(),
              }
            )}
          >
            {category.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
