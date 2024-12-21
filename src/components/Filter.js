import React from "react";

function Filter({ filter, setFilter }) {
  return (
    <div className="filter-wrapper">
      <label htmlFor="filter" className="filter-label">
        Show incompleted tasks only
      </label>
      <input
        type="checkbox"
        id="filter"
        onChange={() => setFilter(!filter)}
        checked={filter}
      />
    </div>
  );
}

export default Filter;
