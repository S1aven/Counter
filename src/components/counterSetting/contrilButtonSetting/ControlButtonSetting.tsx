import React from 'react';
import s from "./ControlButtonSetting.module.css";
import {Button} from "../../button/Button";

type PropsType = {
  setValue: () => void
  minInputValue: number
  maxInputValue: number
  ButtonDisabled: boolean
  displayError: boolean
}

export const ControlButtonSetting = (props: PropsType) => {

  return (
    <div className={s.controlButton}>
      <Button disabled={props.ButtonDisabled || props.displayError}
              title={'set'}
              callback={props.setValue}/>
    </div>
  );
};