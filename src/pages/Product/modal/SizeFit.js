import React from 'react';
import css from './SizeFit.module.scss';

function SizeFit({ openSizeFitModal }) {
  return (
    <div className={css.container}>
      <div className={css.sizeFitHeader}>
        <div className={css.sizeFitHead}>PRODUCT MEASUREMENTS</div>
        <div className={css.closeButton} onClick={openSizeFitModal}>
          CLOSE
        </div>
      </div>
      <div>
        <img
          className={css.sizeTable}
          alt="사이즈표"
          src="https://mblogthumb-phinf.pstatic.net/MjAxODA3MjlfMTYx/MDAxNTMyNzkwNzMwODk3.umnTfyqzGWCsxK1mbfuVe2lJ5INL7D1bh0iCKjBI7pMg.gCGZxb-RXcdI4twMuBmSPgoj4q60BHUACJr3BldkHYQg.JPEG.p1_____/output_3759994961.jpg?type=w800"
        />
      </div>
    </div>
  );
}

export default SizeFit;
