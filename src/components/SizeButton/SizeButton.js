import React from 'react';
import css from './SizeButton.module.scss';

function SizeButton(props) {
  return (
    <div className={css.container} key={props.id}>
      <label htmlFor={props.size}>{props.size}</label>
      <input type="radio" value={props.size} name="size" />
    </div>
  );
}

export default SizeButton;
