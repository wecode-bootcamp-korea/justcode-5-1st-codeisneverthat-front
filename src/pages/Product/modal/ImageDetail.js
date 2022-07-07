import React from 'react';
import css from './ImageDetail.module.scss';

function ImageDetail({ data, openImageDetailModal }) {
  return (
    <div className={css.container} onClick={openImageDetailModal}>
      {data.map(v => (
        <img className={css.modalImage} key={v.id} alt={v.id} src={v.url} />
      ))}
    </div>
  );
}

export default ImageDetail;
