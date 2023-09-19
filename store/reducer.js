const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return ++state;
    default:
      return state;
  }
};

export default reducer;
