export function combineReducers(obj) {
  return (state = 0, action) => {
    const newState = {};

    for (let key in obj) {
      newState[key] = obj[key](state[key], action);
    }

    return newState;
  };
}

export const midd = store => dispatch => action => {
  if (action.type === "ADD") {
    console.log("Middlware for add type!");
    action.type = "REMOVE";
    dispatch(action);
    console.log(store.getState());
  } else dispatch(action);
};

export const midd2 = store => dispatch => action => {
  if (action.type === "REMOVE") {
    console.log("Middlware for remove type!");
    dispatch(action);
    console.log(store.getState());
  } else dispatch(action);
};
