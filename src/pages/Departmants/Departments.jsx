import React from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";

const Departments = () => {
  const { dataDispatch } = useDataContext();
  const navigate = useNavigate();
  const categorySelector = (categoryName) => {
    dataDispatch({ type: "CATEGORY_SELECTOR", payload: categoryName });
  };
  return (
    <div>
      {" "}
      <div
        className="inventory-card"
        onClick={() => {
          categorySelector("Kitchen");
          navigate("/productListing");
        }}
      >
        <h3>Kitchen</h3>
      </div>
      <div
        className="inventory-card"
        onClick={() => {
          categorySelector("Clothing");
          navigate("/productListing");
        }}
      >
        <h3>Clothing</h3>
      </div>
      <div
        className="inventory-card"
        onClick={() => {
          categorySelector("Toys");
          navigate("/productListing");
        }}
      >
        <h3>Toys</h3>
      </div>
    </div>
  );
};

export default Departments;
