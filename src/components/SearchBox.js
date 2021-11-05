import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      // value={}
      className="pa3 ma2 ba b--gray bg-light-gray"
      type="search"
      placeholder="search robots"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
