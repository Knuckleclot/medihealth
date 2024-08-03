"use client";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <div className="w-[600px] bg-white shadow-md h-[65px] rounded-full flex justify-center">
      <div className="w-1/2 flex flex-col rounded-full justify-center p-6 hover:bg-gray-100 transition duration-250">
        <p className="font-medium text-sm">Location</p>
        <input
          type="text"
          placeholder="Berlin"
          className="bg-transparent border-none p-0.5 focus:outline-none placeholder:text-sm"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center rounded-full p-6 hover:bg-gray-100 transition duration-250 relative">
        <p className="font-medium text-sm">Clinic type</p>
        <input
          type="text"
          placeholder="e.g., Dentist, Cardiologist"
          className="bg-transparent border-none p-0.5 focus:outline-none placeholder:text-sm"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div className="w-[60px] cursor-pointer flex flex-col justify-center items-center p-2 rounded-full hover:bg-gray-100 transition duration-250">
        <span className="bg-red-500 p-2 rounded-full">
          <SearchIcon className="w-7 h-7 text-white" />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
