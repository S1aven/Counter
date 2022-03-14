import React from 'react';
import s from "./DisplaySetting.module.css"
import {InputPanel} from "./inputPanel/InputPanel";

type PropsType = {
  onChangeMinInputValue: (value: string) => void
  onChangeMaxInputValue: (value: string) => void
  minInputValue: number
  maxInputValue: number
  displayError: boolean
}

export const DisplaySetting = (props: PropsType) => {

  const onChangeMin = (value: string) => {
    props.onChangeMinInputValue(value)
  }

  const onChangeMax = (value: string) => {
    props.onChangeMaxInputValue(value)
  }

  return (
    <div className={s.display}>
      <InputPanel
        callback={(value: string) => onChangeMax(value)}
        value={props.maxInputValue}
        title={'max value'}
        displayError={props.displayError}
      />
      <InputPanel
        callback={(value: string) => onChangeMin(value)}
        value={props.minInputValue}
        title={'min value'}
        displayError={props.displayError}
      />
    </div>
  );
};
