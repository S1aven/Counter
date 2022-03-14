import React from 'react';
import s from './ControlButton.module.css';
import {Button} from "../../button/Button";

type PropsType = {
  minDisplayValue: number
  maxDisplayValue: number
  currentValue: number
  increment: () => void
  reset: () => void
  displayError: boolean
  displayEnter: boolean
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
    </div>
  );
};