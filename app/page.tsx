import Categories from "@/components/home/Categories";
import SearchedClinics from "@/components/home/SearchedClinics";
import SearchBar from "@/components/Searchbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 paddingX">
      <SearchBar />
      <hr className="w-screen h-2 my-6" />
      <Categories />
      <SearchedClinics />
    </div>
  );
}
