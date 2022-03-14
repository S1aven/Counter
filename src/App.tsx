import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {CounterSetting} from "./components/counterSetting/CounterSetting";

function App() {

  const [minInputValue, setMinValue] = useState<number>(0)
  const [maxInputValue, setMaxValue] = useState<number>(0)
  const [minDisplayValue, setDisplayMinValue] = useState<number>(0)
  const [maxDisplayValue, setDisplayMaxValue] = useState<number>(0)

  const [currentValue, setCurrentValue] = useState<number>(minInputValue)

  //----------UseEffect

  useEffect(() => {
    let maxValueAsString = localStorage.getItem('maxValue')
    if (maxValueAsString) {
      let newMaxValue = JSON.parse(maxValueAsString)
      setMaxValue(newMaxValue)
      setDisplayMaxValue(newMaxValue)
    }

    let minValueAsString = localStorage.getItem('minValue')
    if (minValueAsString) {
      let newMinValue = JSON.parse(minValueAsString)
      setMinValue(newMinValue)
      setDisplayMinValue(newMinValue)
    }
  }, [])

  useEffect(() => {
    // localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // localStorage.setItem('minValue', JSON.stringify(minValue))
    setCurrentValue(minDisplayValue)
  }, [minDisplayValue])

  //----------CounterLogic

  const increment = () => {
    if (currentValue < maxDisplayValue) {
      setCurrentValue(currentValue + 1)
    }
  }

  const reset = () => {
    setCurrentValue(minInputValue)
  }

  const setValue = () => {
    setDisplayMaxValue(maxInputValue)
    setDisplayMinValue(minInputValue)
    localStorage.setItem('maxValue', JSON.stringify(maxInputValue))
    localStorage.setItem('minValue', JSON.stringify(minInputValue))
    setCurrentValue(minInputValue)
  }

  //----------OnChangeInput

  const onChangeMinInputValue = (value: string) => {
    let numberValue = parseInt(value)
    setMinValue(numberValue)
  }

  const onChangeMaxInputValue = (value: string) => {
    let numberValue = parseInt(value)
    setMaxValue(numberValue)
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
      <CounterSetting
        setValue={setValue}
        onChangeMinInputValue={onChangeMinInputValue}
        onChangeMaxInputValue={onChangeMaxInputValue}
        minInputValue={minInputValue}
        maxInputValue={maxInputValue}
        ButtonDisabled={ButtonDisabled}
        displayError={displayError}
      />
      <Counter
        currentValue={currentValue}
        increment={increment}
        reset={reset}
        minDisplayValue={minDisplayValue}
        maxDisplayValue={maxDisplayValue}
        displayError={displayError}
        displayEnter={displayEnter}
      />
    </div>
  );
}

export default App;
