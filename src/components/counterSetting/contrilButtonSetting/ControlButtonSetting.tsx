import React from 'react';
import s from "./ControlButtonSetting.module.css";
import {Button} from "../../button/Button";

type PropsType = {
  setValue: () => void
  minInputValue: number
  maxInputValue: number
  ButtonDisabled: boolean
  displayError: boolean
  panel: boolean
}

export const ControlButtonSetting = (props: PropsType) => {

  let disabledMod = false

  if(!props.panel) {
    disabledMod = props.ButtonDisabled
  }

  return (
    <div className={s.controlButton}>
      <Button disabled={disabledMod || props.displayError}
              title={'set'}
              callback={props.setValue}/>
    </div>
  );
};