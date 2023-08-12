import React from "react";
import Filters from "../../components/Filters/Filters";
import { useDataContext } from "../../context/DataContext";
import "./ProductListing.css";
import Card from "../../components/Card/Card";

const ProductListing = () => {
  const { sortByLowStockItems } = useDataContext();

  return (
    <div>
      <Filters />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {sortByLowStockItems?.length > 0 ? (
            <>
              {sortByLowStockItems?.map((data) => {
                return <Card key={data?.id} data={data} />;
              })}
            </>
          ) : (
            <tr>
              <td>No Data Found</td>
              <td>No Data Found</td>
              <td>No Data Found</td>
              <td>No Data Found</td>
              <td>No Data Found</td>
              <td>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListing;
