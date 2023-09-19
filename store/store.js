import reducerFunct from "./reducer.js";
import reducerFunct2 from "./reducer2.js";

import { combineReducers, midd, midd2 } from "./utility.js";

const chainMiddlwares = (store, middlewareFactories) => {
  let dispatch = store.dispatch;
  middlewareFactories.forEach(factory => {
    dispatch = factory(store)(dispatch);
  });
  return dispatch;
};

const createStore = (reducer, initState, middlwares) => {
  const store = {};
  var state = initState;
  //to understand the logic of these listners, just think about a listner as it is a component
  //who is wating for the updated state
  const listners = [];

  store.getState = () => state;

  store.dispatch = action => {
    if (!action.type)
      throw new Error("The action has to contain a type property!");
    state = reducer(state, action);
    listners.forEach(listner => listner());
  };

  store.subscribe = listner => {
    listners.push(listner);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  if (middlwares) store.dispatch = chainMiddlwares(store, middlwares);

  return store;
};

export const store = createStore(
  combineReducers({ reducerFunct, reducerFunct2 }),
  undefined,
  [midd, midd2]
);
