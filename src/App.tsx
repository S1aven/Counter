import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {CounterSetting} from "./components/counterSetting/CounterSetting";
import {Button} from "./components/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, store} from "./bll/store";
import {
  incrementAC,
  onChangeMaxInputValueAC,
  onChangeMinInputValueAC,
  resetAC, selectCounterAC, setValueAC,
  switchPanelAC
} from "./bll/counter-reducer";
import {saveState} from "./utils/localstorage-utils";

function App() {

  // const [minInputValue, setMinInputValue] = useState<number>(0)
  // const [maxInputValue, setMaxInputValue] = useState<number>(0)
  // const [minDisplayValue, setDisplayMinValue] = useState<number>(0)
  // const [maxDisplayValue, setDisplayMaxValue] = useState<number>(0)
  //
  // const [currentValue, setCurrentValue] = useState<number>(minInputValue)

  const counterOption = useSelector<AppStateType, boolean>(state => state.counter.counterOption)
  const panel = useSelector<AppStateType, boolean>(state => state.counter.panel)

  const minInputValue = useSelector<AppStateType, number>(state => state.counter.minInputValue);
  const maxInputValue = useSelector<AppStateType, number>(state => state.counter.maxInputValue);
  const minDisplayValue = useSelector<AppStateType, number>(state => state.counter.minDisplayValue);
  const maxDisplayValue = useSelector<AppStateType, number>(state => state.counter.maxDisplayValue);

  const currentValue = useSelector<AppStateType, number>(state => state.counter.currentValue)

  const dispatch = useDispatch();

  // const [panel, setPanel] = useState<boolean>(false)
  // const [counterOption, setCounterOption] = useState<boolean>(true)

  //----------UseEffect

  // useEffect(() => {
  //   let maxValueAsString = localStorage.getItem('maxValue')
  //   if (maxValueAsString) {
  //     let newMaxValue = JSON.parse(maxValueAsString)
  //     setMaxInputValue(newMaxValue)
  //     setDisplayMaxValue(newMaxValue)
  //   }
  //
  //   let minValueAsString = localStorage.getItem('minValue')
  //   if (minValueAsString) {
  //     let newMinValue = JSON.parse(minValueAsString)
  //     setMinInputValue(newMinValue)
  //     setDisplayMinValue(newMinValue)
  //   }
  // }, [])

  // useEffect(() => {
  //   // localStorage.setItem('maxValue', JSON.stringify(maxValue))
  //   // localStorage.setItem('minValue', JSON.stringify(minValue))
  //   setCurrentValue(minDisplayValue)
  // }, [minDisplayValue])

  //----------CounterLogic

  const increment = () => {
    if (currentValue < maxDisplayValue) {
      // setCurrentValue(currentValue + 1)
      dispatch(incrementAC())
    }
  }

  const reset = () => {
    // setCurrentValue(minInputValue)
    dispatch(resetAC())
  }

  const setValue = () => {
    // saveState(
    //   minInputValue, maxInputValue
    //   // {counter: store.getState().counter}
    //   // minInputValue: store.getState().counter.minInputValue,
    //   // maxInputValue: store.getState().counter.maxInputValue
    // );
    dispatch(setValueAC())
    // setDisplayMaxValue(maxInputValue)
    // setDisplayMinValue(minInputValue)
    // localStorage.setItem('maxValue', JSON.stringify(maxInputValue))
    // localStorage.setItem('minValue', JSON.stringify(minInputValue))
    // setCurrentValue(minInputValue)
    // setPanel(false)
  }

  //----------OnChangeInput

  const onChangeMinInputValue = (value: string) => {
    // let numberValue = parseInt(value)
    // setMinInputValue(numberValue)
    dispatch(onChangeMinInputValueAC(value))
  }

  const onChangeMaxInputValue = (value: string) => {
    // let numberValue = parseInt(value)
    // setMaxInputValue(numberValue)
    dispatch(onChangeMaxInputValueAC(value))
  }

  //-----------SwitchPanel

  const switchPanel = () => {
    // setPanel(true)
    dispatch(switchPanelAC())
  }

  //---------- CounterOption

  const selectCounter = () => {
    // setCounterOption(!counterOption)
    // setPanel(false)
    dispatch(selectCounterAC())
  }

  //-----------Styles

  let ButtonDisabled = false

  if (minInputValue === minDisplayValue && maxInputValue === maxDisplayValue) {
    ButtonDisabled = true
  }

  let displayEnter = false

  if (minInputValue !== minDisplayValue || maxInputValue !== maxDisplayValue) {
    displayEnter = true
  }

  let displayError = false

  if (minInputValue >= maxInputValue || minInputValue < 0) {
    displayError = true
  }

  return (
    <div className="App">
      <Button callback={selectCounter}>Select the type of counter</Button>
      <div className={"App-container"}>
        {counterOption ?
          <>
            <CounterSetting
              setValue={setValue}
              onChangeMinInputValue={onChangeMinInputValue}
              onChangeMaxInputValue={onChangeMaxInputValue}
              minInputValue={minInputValue}
              maxInputValue={maxInputValue}
              ButtonDisabled={ButtonDisabled}
              displayError={displayError}
              panel={panel}
            />
            <Counter
              currentValue={currentValue}
              increment={increment}
              reset={reset}
              minDisplayValue={minDisplayValue}
              maxDisplayValue={maxDisplayValue}
              displayError={displayError}
              displayEnter={displayEnter}
              switchPanel={switchPanel}
              counterOption={counterOption}
            />
          </>
          :
          <>
            {panel ?
              <CounterSetting
                setValue={setValue}
                onChangeMinInputValue={onChangeMinInputValue}
                onChangeMaxInputValue={onChangeMaxInputValue}
                minInputValue={minInputValue}
                maxInputValue={maxInputValue}
                ButtonDisabled={ButtonDisabled}
                displayError={displayError}
                panel={panel}
              />
              :
              <Counter
                currentValue={currentValue}
                increment={increment}
                reset={reset}
                minDisplayValue={minDisplayValue}
                maxDisplayValue={maxDisplayValue}
                displayError={displayError}
                displayEnter={displayEnter}
                switchPanel={switchPanel}
                counterOption={counterOption}
              />
            }
          </>
        }
      </div>
    </div>
  );
}

export default App;
