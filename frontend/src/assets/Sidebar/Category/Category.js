import "./Category.css";
import React from 'react';
import Input from "../../../components/Input";

function Category({ handleChange }) {
  return (
    <div className="sidebar-category">
      <h2 className="sidebar-title category">Category</h2>
      <div className="category-choice">
        <Input
          handleChange={handleChange}
          value="salt"
          title="Salt"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="salt"
          title="Honey"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
