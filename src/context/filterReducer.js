export const initialState = {
  sortBy: "",
  brand: [],
  size: [],
  ideal: "",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT_BY":
      return { ...state, sortBy: payload };
    case "IDEAL_FOR":
      return { ...state, ideal: payload };
    case "TOGGLE_BRAND":
      const isBrandFiltered = state.brand.find((item) => item === payload);
      return isBrandFiltered
        ? { ...state, brand: state.brand.filter((item) => item !== payload) }
        : { ...state, brand: state.brand.concat(payload) };
    case "TOGGLE_SIZE":
      const isSizeFiltered = state.size.find((item) => item === payload);
      return isSizeFiltered
        ? { ...state, size: state.size.filter((item) => item !== payload) }
        : { ...state, size: state.size.concat(payload) };
    case "CLEAR_ALL":
      return initialState;
    default:
      return state;
  }
};
