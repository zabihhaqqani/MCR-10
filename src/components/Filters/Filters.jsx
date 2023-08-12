import React from "react";
import "./Filters.css";
import { useDataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const { dataDispatch, sortByDepartmant, sort, lowStock } = useDataContext();

  const navigate = useNavigate()
  return (
    <div className="filters-container">
      <h3>Products</h3>
      <div>
        <label htmlFor="departmant">Sort by Department: </label>
        <select
          name="departmant"
          id="departmant"
          value={localStorage?.getItem("sortByDepartment")}
          onChange={(e) => {
            dataDispatch({
              type: "SORT_BY_DEPARTMENT",
              payload: e.target.value,
            });
          }}
        >
          <option value="All">All Departmants</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys </option>
        </select>
      </div>

      <div>
        <input
          id="lowStock"
          type="checkbox"
          value="lowStock"
          checked={lowStock}
          onChange={(e) => {
            const isChecked = e.target.checked;
            dataDispatch({
              type: "SORT_BY_LOW_STOCK",
              payload: isChecked,
            });
          }}
        />
        <label htmlFor="lowStock">Low Stock Items</label>
      </div>

      <div>
        <label htmlFor="sort">Sort: </label>

        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={(e) => {
            dataDispatch({
              type: "SORT_ASCENDING",
              payload: e.target.value,
            });
          }}
        >
          <option value="" disabled>
            Select:
          </option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </div>

      <div>
        <button className="btn" onClick={()=>navigate("/addItem")}>New</button>
      </div>
    </div>
  );
};

export default Filters;
