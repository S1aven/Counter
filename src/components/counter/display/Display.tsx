import React from 'react';
import s from './Display.module.css';

type PropsType = {
  currentValue: number
  maxDisplayValue: number
  displayError: boolean
  displayEnter: boolean
}

export const Display = (props: PropsType) => {

  const limit = props.currentValue < props.maxDisplayValue ? s.display : `${s.display} ${s.limit}`

  if (props.displayError) {
    return (
      <div className={`${s.error} ${s.display}`}>
        Incorrect value!
      </div>)
  } else if (props.displayEnter) {
    return (
      <div className={s.display}>
        Enter values and press 'set'
      </div>)
  }

  return (
    <div className={limit}>
      {props.currentValue}
    </div>
  )
};