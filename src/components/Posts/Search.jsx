import React from "react";

export const Search = ({ search, handleInputChange, propsMessage }) => {

  const componentName = "Search";
  console.log(`${propsMessage} ${componentName}`);
  
  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Search by username"
        name="search"
        value={search}
        onChange={handleInputChange}
      />
    </div>
  );
};
