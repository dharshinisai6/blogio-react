import React from "react";
import { useSearchParams } from "react-router-dom";

const Category = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setSearchParams({ search: searchQuery });
    } else {
      setSearchParams({ search: searchQuery, category });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        className="category-btn btn btn-sm m-1"
        onClick={() => handleCategoryClick("All")}
      >
        All
      </button>

      {options.map((cat, index) => (
        <button
          key={index}
          className="category-btn btn btn-sm m-1"
          onClick={() => handleCategoryClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Category;
