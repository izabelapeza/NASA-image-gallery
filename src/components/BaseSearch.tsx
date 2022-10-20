import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BaseSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const changeSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/image-gallery/${searchQuery}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline text-white"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </span>
      <input
        type="text"
        id="imageSearch"
        name="imageSearch"
        onChange={changeSearchHandler}
        onKeyDown={handleKeyDown}
        value={searchQuery}
        className="py-2 text-sm text-white bg-white bg-opacity-20 focus:bg-opacity-30 rounded-md pl-10 focus:outline-none placeholder-white transition"
        placeholder="Search..."
        autoFocus
      />
    </div>
  );
}
