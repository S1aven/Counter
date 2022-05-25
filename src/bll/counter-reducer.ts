const initialState = {
  minInputValue: 0,
  maxInputValue: 0,
  minDisplayValue: 0,
  maxDisplayValue: 0,
  currentValue: 0,
  panel: false,
  counterOption: true,
};

export type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        currentValue: state.currentValue + 1
      }
    case "RESET":
      return {
        ...state,
        currentValue: state.minInputValue
      }
    case 'SET_VALUE':
      return {
        ...state,
        maxDisplayValue: state.maxInputValue,
        minDisplayValue: state.minInputValue,
        currentValue: state.minInputValue,
        panel: state.panel = false
      }
    case 'ON_CHANGE_MIN_INPUT_VALUE':
      const minValue = parseInt(action.value)
      return {
        ...state,
        minInputValue: minValue
      }
    case 'ON_CHANGE_MAX_INPUT_VALUE':
      const maxValue = parseInt(action.value)
      return {
        ...state,
        maxInputValue: maxValue
      }
    case "SWITCH_PANEL":
      return {
        ...state,
        panel: state.panel = true
      }
    case "SELECT_COUNTER":
      return {
        ...state,
        counterOption: !state.counterOption,
        panel: state.panel = false
      }

    default:
      return state
  }
};

export const incrementAC = () => ({type: 'INCREMENT'} as const)
export const resetAC = () => ({type: 'RESET'} as const)
export const setValueAC = () => ({type: 'SET_VALUE'} as const)

export const onChangeMinInputValueAC = (value: string) => ({type: 'ON_CHANGE_MIN_INPUT_VALUE', value} as const)
export const onChangeMaxInputValueAC = (value: string) => ({type: 'ON_CHANGE_MAX_INPUT_VALUE', value} as const)

export const switchPanelAC = () => ({type: 'SWITCH_PANEL'} as const)
export const selectCounterAC = () => ({type: 'SELECT_COUNTER'} as const)

export type IncrementActionType = ReturnType<typeof incrementAC>
export type ResetActionType = ReturnType<typeof resetAC>
export type SetValueActionType = ReturnType<typeof setValueAC>
export type onChangeMinInputValueActionType = ReturnType<typeof onChangeMinInputValueAC>
export type onChangeMaxInputValueActionType = ReturnType<typeof onChangeMaxInputValueAC>
export type switchPanelActionType = ReturnType<typeof switchPanelAC>
export type selectCounterActionType = ReturnType<typeof selectCounterAC>

type ActionType = IncrementActionType
  | ResetActionType
  | SetValueActionType
  | onChangeMinInputValueActionType
  | onChangeMaxInputValueActionType
  | switchPanelActionType
  | selectCounterActionType
