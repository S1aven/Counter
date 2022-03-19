import React from 'react';
import {Display} from "./display/Display";
import {ControlButton} from "./controlButton/ControlButton";
import s from './Counter.module.css'

export type PropsType = {
  currentValue: number
  minDisplayValue: number
  maxDisplayValue: number
  displayError: boolean
  displayEnter: boolean
  counterOption?: boolean
  increment: () => void
  reset: () => void
  switchPanel: () => void
}

export const Counter = (props: PropsType) => {
  return (
    <div className={s.counter}>
      <Display
        currentValue={props.currentValue}
        maxDisplayValue={props.maxDisplayValue}
        displayError={props.displayError}
        displayEnter={props.displayEnter}
      />
      <ControlButton
        increment={props.increment}
        reset={props.reset}
        currentValue={props.currentValue}
        minDisplayValue={props.minDisplayValue}
        maxDisplayValue={props.maxDisplayValue}
        displayError={props.displayError}
        displayEnter={props.displayEnter}
        switchPanel={props.switchPanel}
        counterOption={props.counterOption}
      />
    </div>
  );
};
