import React, { useState, useEffect } from 'react';
import css from './SortModal.module.scss';
import { Link } from 'react-router-dom';

function SortModal(props) {
  function closeModal() {
    props.closeModal();
  }
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={e => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default SortModal;
