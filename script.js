import { store } from "./store/store.js";

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch({ type: "ADD" });
store.dispatch({ type: "REMOVE" });

/*
--here is how you unsubscribe from the store--

    const returnedFunct = subscribe(fuct)

    unmount inside the component:
    returnedFunct();
*/
