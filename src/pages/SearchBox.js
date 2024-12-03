import { useState } from "react";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    console.log("Search Query:", event.target.value); // Handle search logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Search Query:", searchQuery);
    // Add further functionality such as navigating or fetching data based on the query
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-40">
      <label
        htmlFor="fixed-header-drawer-exp"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
      >
        🔍 {/* Replace with an appropriate icon */}
      </label>
      <input
        className="pl-8 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        id="fixed-header-drawer-exp"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </form>
  );
}

export default SearchBox;
