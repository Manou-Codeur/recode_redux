const reducer2 = (state = 0, action) => {
  switch (action.type) {
    case "REMOVE":
      return --state;
    default:
      return state;
  }
};

export default reducer2;
