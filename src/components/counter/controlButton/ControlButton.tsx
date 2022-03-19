import React from 'react';
import s from './ControlButton.module.css';
import {Button} from "../../button/Button";

type PropsType = {
  minDisplayValue: number
  maxDisplayValue: number
  currentValue: number
  displayError: boolean
  displayEnter: boolean
  counterOption?: boolean
  increment: () => void
  reset: () => void
  switchPanel: () => void
}

export const ControlButton = (props: PropsType) => {

  return (
    <div className={s.controlButton}>
      <Button disabled={props.currentValue === props.maxDisplayValue
        || props.displayError
        || props.displayEnter}
              callback={props.increment}
              title={'inc'}/>
      <Button disabled={props.currentValue === props.minDisplayValue
        || props.displayError
        || props.displayEnter}
              callback={props.reset}
              title={'reset'}/>
      {!props.counterOption && <Button title={'set'} callback={props.switchPanel}/>}
    </div>
  );
};