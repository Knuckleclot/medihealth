"use client";

import { CLINIC_CATEGORIES } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import CategoryBlock from "./CategoryBlock";

const SearchedClinics = () => {
  const searchParams = useSearchParams();
  const selectedCategory =
    searchParams.get("category") || CLINIC_CATEGORIES[0].category.toLowerCase();
  const selectedLocation = searchParams.get("location");

  console.log({ selectedCategory, selectedLocation });

  return (
    <div>
      {CLINIC_CATEGORIES.filter(
        (clinicCategory) =>
          selectedCategory === clinicCategory.category.toLowerCase()
      ).map((category, index) => (
        <div
          key={index}
          className="w-screen flex justify-start flex-wrap gap-6 paddingX my-4"
        >
          {category.clinics
            .filter(
              (clinic) =>
                !selectedLocation ||
                clinic.location
                  .toLowerCase()
                  .includes(selectedLocation.toLowerCase())
            )
            .map((clinic, index) => (
              <CategoryBlock key={index} clinic={clinic} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default SearchedClinics;
