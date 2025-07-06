import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value, category: searchParams.get("category") || "" });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    const category = searchParams.get("category");
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "20px auto",
      position: "relative",
    }}>
      <input
        type="text"
        placeholder="Search Blogs"
        value={searchQuery}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px 40px 10px 35px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />
      <FaSearch style={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        color: "#aaa"
      }} />
      {searchQuery && (
        <FaTimes
          onClick={clearSearch}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            color: "#999",
            cursor: "pointer"
          }}
        />
      )}
    </div>
  );
};

export default Search;
