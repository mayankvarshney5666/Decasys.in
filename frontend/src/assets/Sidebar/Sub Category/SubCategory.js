import Input from "../../../components/Input";
import React from 'react';
import "./SubCategory.css";

const SubCategory = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title sub-category">Sub Category</h2>
        <div className="subcategory-choice">

          <Input
            handleChange={handleChange}
            value={"Pink Himalayan..."}
            title="Pink Himalayan..."
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={"Organic honey"}
            title="Organic honey"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={"Raw honey"}
            title="Raw honey"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={"Manuka honey"}
            title="Manuka honey"
            name="test2"
          />
        </div>
      </div>
    </>
  );
};

export default SubCategory;
