import { useDataContext } from "../../context/DataContext";
import "./Inventory.css";

const Inventory = () => {
  const { data } = useDataContext();

  const lowStockItems = data?.filter((data) => data.stock <= 10);

  const totalStock = data?.reduce((total, item) => total + item?.stock, 0);

  const totalDeliveredItems = data?.reduce(
    (total, item) => total + item?.delivered,
    0
  );

  return (
    <div>
      <div className="inventory-card">
        <h3>{totalStock}</h3>
        <h3>Total Stock</h3>
      </div>
      <div className="inventory-card">
        <h3>{totalDeliveredItems}</h3>
        <h4>Total Delivered</h4>
      </div>
      <div className="inventory-card">
        <h3>{lowStockItems?.length}</h3>

        <h4>Low Stock:</h4>
      </div>
    </div>
  );
};

export default Inventory;
