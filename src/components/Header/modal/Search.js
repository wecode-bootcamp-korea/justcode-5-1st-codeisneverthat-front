import React from 'react';
import css from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Search({ openModal }) {
  return (
    <div id={css['search_wrap']}>
      <input
        type="text"
        className={css.search_input}
        autoComplete="off"
        placeholder="Type to search items"
      />
      <button className={css.btn_close} onClick={openModal}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}

export default Search;
