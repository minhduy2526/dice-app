const getSelectedReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_SELECTED":
      if (action.stateSelected === "TÀI") {
        return (state = "TÀI");
      } else if (action.stateSelected === "XỈU") {
        return (state = "XỈU");
      }

    default:
      return state;
  }
};
export default getSelectedReducer;
