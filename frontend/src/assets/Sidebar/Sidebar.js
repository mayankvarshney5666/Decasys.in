import React from 'react'
import Category from "./Category/Category";
import SubCategory from "./Sub Category/SubCategory";
import Brands from "./Brands/Brands";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        </div>
        <Category handleChange={handleChange} />
        <SubCategory handleChange={handleChange} />
        <Brands handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
