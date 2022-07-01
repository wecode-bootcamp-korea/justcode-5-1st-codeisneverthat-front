import React from 'react';
import css from './SizeButton.module.scss';

function SizeButton(props) {
  return (
    <div className={css.container} key={props.id}>
      <input
        type="radio"
        value={props.size}
        id={props.size}
        data-id={props.product_detatil_id}
        name="size"
        defaultChecked={props.idx == 0 ? true : false}
        onChange={props.handleChange}
      />
      <label htmlFor={props.size}>{props.size}</label>
    </div>
  );
}

export default SizeButton;
