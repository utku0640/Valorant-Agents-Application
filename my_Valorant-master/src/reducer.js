const reducer = (state, action) => {
  if (action.type === "FETCH_DATA") {
    return { ...state, champCard: action.payload };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "LOADING_OUT") {
    return { ...state, loading: false };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      champCard: state.champCard.filter((item) => item.uuid !== action.payload),
    };
  }
  return state;
};

export default reducer;
