import {AppStateType, AppStoreType, store} from "../bll/store";
import {InitialStateType} from "../bll/counter-reducer";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// export const loadState = (): any => {
//   try {
//     const newMinValue = localStorage.getItem('minInputValue');
//     const newMaxValue = localStorage.getItem('maxInputValue');
//     if (!newMinValue || !newMaxValue) {
//       return undefined;
//     }
//
//     const newMinValueParse: number = JSON.parse(newMinValue);
//     const newMaxValueParse: number = JSON.parse(newMaxValue);
//
//
//     return {
//       counter: {...store.getState().counter, minInputValue: newMinValueParse, maxInputValue: newMaxValueParse}
//     }
//
//     // return {
//     //   counter: {
//     //     minInputValue: newMinValueParse,
//     //     maxInputValue: newMaxValueParse,
//     //     minDisplayValue: 0,
//     //     maxDisplayValue: 0,
//     //     currentValue: 0,
//     //     panel: false,
//     //     counterOption: true,
//     //   }
//     // }
//
//   } catch (err) {
//     return undefined;
//   }
// };

// export const saveState = (minInputValue: number, maxInputValue: number) => {
//   try {
//     const newMinValue = JSON.stringify(minInputValue);
//     const newMaxValue = JSON.stringify(maxInputValue);
//     localStorage.setItem('minInputValue', newMinValue);
//     localStorage.setItem('maxInputValue', newMaxValue);
//   } catch {
//     // ignore write errors
//   }
// };

export const saveState = (state: AppStateType) => {
  try {
    const newMinValue = JSON.stringify(state);
    localStorage.setItem('state', newMinValue);
  } catch {
    // ignore write errors
  }
};