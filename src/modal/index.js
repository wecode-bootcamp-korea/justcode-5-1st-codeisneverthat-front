import ReactDOM from 'react-dom';
import css from './modal.module.scss';

const modal = document.getElementById('modal');

function modalLayout(props) {
  return ReactDOM.createPortal(
    <div className={css.dim} onClick={props.openModal}>
      {props.children}
    </div>,
    modal
  );
}

export default modalLayout;
