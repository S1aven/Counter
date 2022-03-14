import React from 'react';
import s from "./Button.module.css";

type PropsType = {
  disabled: boolean
  title: string
  callback: () => void
}

export const Button = (props: PropsType) => {
  return (
    <button disabled={props.disabled} onClick={() => {props.callback()}} className={s.button}>{props.title}</button>
  );
};