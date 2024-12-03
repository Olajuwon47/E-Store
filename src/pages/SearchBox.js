import { useState } from "react";

function SearchBox({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    console.log("Search Query:", query);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log("Submitted Search Query:", searchQuery);
      if (onSearch) {
        onSearch(searchQuery); // Callback for parent component or API fetch
      }
    } else {
      console.log("Search query is empty!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-40">
      <label
        htmlFor="search-input"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
      >
        🔍 {/* Replace with an appropriate accessible icon */}
      </label>
      <input
        id="search-input"
        className="pl-8 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        aria-label="Search"
      />
    </form>
  );
}

export default SearchBox;
