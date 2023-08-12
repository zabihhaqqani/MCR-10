import { createContext, useContext, useEffect, useReducer } from "react";
import { inventoryData } from "../Data";
import { DataReducer } from "./../reducer/DataReducer";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const initialState = {
    data:
      localStorage.getItem("data") !== null
        ? JSON.parse(localStorage.getItem("data"))
        : inventoryData,
    sortByDepartment: localStorage?.getItem("sortByDepartment") || "All",
    lowStock: "",
    sort: localStorage?.getItem("sort") ?? "name",
  };

  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);

  const sortByDepartmentData = [...dataState?.data]?.filter((data) =>
    dataState?.sortByDepartment === "All"
      ? data
      : data.department === dataState?.sortByDepartment
  );

  const sortAscendingData = [...sortByDepartmentData]?.sort((a, b) => {
    if (dataState?.sort === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a[dataState?.sort] - b[dataState?.sort];
    }
  });

  const sortByLowStockItems = [...sortAscendingData]?.filter((data) =>
    dataState?.lowStock ? data.stock <= 10 : data
  );

  const addProductHandler = (product) => {
    dataDispatch({ type: "ADD_PRODUCT", payload: product });
  };

  useEffect(() => {
    localStorage.setItem("sortByDepartment", dataState?.sortByDepartment);
  }, [dataState?.sortByDepartment]);

  useEffect(() => {
    localStorage.setItem("lowStock", dataState?.lowStock);
  }, [dataState?.lowStock]);

  useEffect(() => {
    localStorage.setItem("sort", dataState?.sort);
  }, [dataState?.sort]);

  return (
    <DataContext.Provider
      value={{
        ...dataState,
        dataDispatch,
        sortByDepartmentData,
        sortAscendingData,
        sortByLowStockItems,
        addProductHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
