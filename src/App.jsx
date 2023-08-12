import "./App.css";

import { Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory Dashboard/Inventory";
import LeftSideBar from "./pages/LeftSideBar/LeftSideBar";
import ProductListing from "./pages/Product Listing/ProductListing";
import ProductManagement from "./pages/Product Management/ProductManagement";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import Departments from "./pages/Departmants/Departments";

function App() {
  return (
    <div className="main-container">
      <LeftSideBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/addItem" element={<AddItemPage />} />
          <Route path="/departments" element={<Departments />} />

          {/* <Route path="/productManagement" element={<ProductManagement />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
