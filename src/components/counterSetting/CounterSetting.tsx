import React from 'react';
import s from './CounterSetting.module.css'
import {DisplaySetting} from "./displaySetting/DisplaySetting";
import {ControlButtonSetting} from "./contrilButtonSetting/ControlButtonSetting";

type PropsType = {
  setValue: () => void
  onChangeMinInputValue: (value: string) => void
  onChangeMaxInputValue: (value: string) => void
  minInputValue: number
  maxInputValue: number
  ButtonDisabled: boolean
  displayError: boolean
  panel: boolean
}

export const CounterSetting = (props: PropsType) => {
  return (
    <div className={s.counterSetting}>
      <DisplaySetting
        onChangeMaxInputValue={props.onChangeMaxInputValue}
        onChangeMinInputValue={props.onChangeMinInputValue}
        minInputValue={props.minInputValue}
        maxInputValue={props.maxInputValue}
        displayError={props.displayError}
      />
      <ControlButtonSetting
        setValue={props.setValue}
        minInputValue={props.minInputValue}
        maxInputValue={props.maxInputValue}
        ButtonDisabled={props.ButtonDisabled}
        displayError={props.displayError}
        panel={props.panel}
      />
    </div>
  );
};