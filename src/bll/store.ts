import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";

export const rootReducer = combineReducers({
  counter: counterReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState());

// const minInputValue = store.getState().counter.minInputValue;
// const maxInputValue = store.getState().counter.maxInputValue;

store.subscribe(() => {
  saveState(
    // minInputValue, maxInputValue
    {counter: store.getState().counter}
    // minInputValue: store.getState().counter.minInputValue,
    // maxInputValue: store.getState().counter.maxInputValue
  );
});

// store.subscribe(() => {
//   saveState({
//     minInputValue: store.getState().counter.minInputValue,
//     maxInputValue: store.getState().counter.maxInputValue
//   });
// });

// store.subscribe(() => {
//   saveState({
//     counter: store.getState().counter
//   });
// });

// store.subscribe(() => {
//   localStorage.setItem('minInputValue', JSON.stringify(store.getState().counter.minInputValue))
//   localStorage.setItem('maxInputValue', JSON.stringify(store.getState().counter.maxInputValue))
// })

export type AppStoreType = typeof store;