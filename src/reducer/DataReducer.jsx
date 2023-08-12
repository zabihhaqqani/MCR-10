export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_DEPARTMENT":
      localStorage.setItem("sortByDepartment", action.payload);
      return {
        ...state,
        sortByDepartment: action.payload,
      };
    case "SORT_ASCENDING":
      localStorage.setItem("sort", action.payload);

      return {
        ...state,
        sort: action.payload,
      };
    case "SORT_BY_LOW_STOCK":
      return {
        ...state,
        lowStock: action.payload,
      };
    case "ADD_PRODUCT":
      localStorage.setItem(
        "data",
        JSON.stringify([...state?.data, action.payload])
      );
      return { ...state, data: [...state?.data, action.payload] };

    case "CATEGORY_SELECTOR":
      localStorage.setItem("sortByDepartment", action.payload);

      return {
        ...state,
        sortByDepartment: action.payload,
      };
    default:
      return state;
  }
};
