import React from 'react';

const Filter = ({ handleFilter }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="Search by title" onChange={(e) => handleFilter(e.target.value, 'title')} />
      </div>
      <div className="col-md-6">
        <select className="form-control" onChange={(e) => handleFilter(e.target.value, 'rating')}>
          <option value="">Filter by rating</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
