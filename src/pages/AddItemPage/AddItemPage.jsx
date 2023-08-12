import React, { useState } from "react";
import "./AddItemPage.css";
import { v4 as uuidv4 } from "uuid";
import { useDataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddItemPage = () => {
  const { addProductHandler } = useDataContext();

  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState({
    id: uuidv4(),
    name: "",
    department: "",
    price: "",
    stock: "",
    sku: "",
    supplier: "",
    imageUrl: "",
    description: "",
    delivered: "",
  });

  const inputHandler = (e) => {
    setProductDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addProductHandler(productDetails);
    setProductDetails();
     toast.success(`Product added to ${productDetails?.department} Department`);
    navigate("/productListing");


  };
  return (
    <div>
      <div className="modal-content">
        <form onSubmit={submitHandler}>
          <div>
            <h2>Add New Product</h2>
          </div>
          <label htmlFor="Department">Department:</label>
          <select
            name="department"
            id="department"
            value={productDetails?.department}
            onChange={inputHandler}
          >
            <option disabled value="">
              Select Department:
            </option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            id="name"
            name="name"
            onChange={inputHandler}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="50"
            rows="2"
            onChange={inputHandler}
            required
            placeholder="Enter Description"
          ></textarea>

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            placeholder="Enter Price"
            id="price"
            name="price"
            onChange={inputHandler}
            required
          />

          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            placeholder="Enter Stock"
            id="stock"
            name="stock"
            onChange={inputHandler}
            required
          />

          <label htmlFor="sku">SKU:</label>
          <input
            type="number"
            placeholder="Enter SKU"
            id="sku"
            name="sku"
            onChange={inputHandler}
            required
          />

          <label htmlFor="supplier">Supplier:</label>
          <input
            type="text"
            placeholder="Enter Supplier"
            id="supplier"
            name="supplier"
            onChange={inputHandler}
            // value={productDetails?.supplier}
            required
          />

          <label htmlFor="delivered">Delivered:</label>
          <input
            type="text"
            placeholder="Enter Delivered"
            id="delivered"
            name="delivered"
            disabled
          />

          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="url"
            placeholder="Enter Image Url"
            id="imageUrl"
            name="imageUrl"
            onChange={inputHandler}
            required
          />

          <button className="btn" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
