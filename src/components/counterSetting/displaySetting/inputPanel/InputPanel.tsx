import React, {ChangeEvent} from 'react';
import s from "./InputPanel.module.css";

export type PropsType = {
  title: string
  callback: (value: string) => void
  value?: number
  displayError?: boolean
}

export const InputPanel = (props: PropsType) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.callback(e.currentTarget.value)
  }

  const className = props.displayError ? `${s.input} ${s.error}` : s.input

  return (
    <div className={s.inputPanel}>
      <span>{props.title}</span>
      <input
        className={className}
        onChange={onChange}
        value={props.value}
        type={'number'}
      />
    </div>
  );
};