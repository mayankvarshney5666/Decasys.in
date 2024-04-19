import "./Brands.css";
import React from 'react';
import Input from "../../../components/Input";

const Brands = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title brands">Brands</h2>
        <div className="brands-choice">

          <Input
            handleChange={handleChange}
            value="Celtic sea salt"
            title="Celtic sea salt"
            name="test1"
          />

          <Input
            handleChange={handleChange}
            value="le Guerandais sea salt"
            title="le Guerandais..."
            name="test1"
          />
        </div>
      </div>
    </>
  );
};

export default Brands;
