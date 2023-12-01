import React from "react";
import PropTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import Head from "../head";
import {createPortal} from "react-dom";
import CartTotalPrice from "../cart-total-price";
import './style.css';

function CartModal({open, onClose, children, totalPrice, totalItemsCount}) {

  const cn = bem("CartModal")

  const handleDialogClick = (event) => {
    event.stopPropagation();
  }

  return createPortal(
    <div
      className={cn()}
      style={{display: open ? 'flex' : 'none'}}
      onClick={() => onClose()}
    >
      <dialog className={cn('dialog')} open={open} onClick={handleDialogClick}>
        <Head
          title='Корзина'
          button={<button onClick={() => onClose()}>Закрыть</button>}
        />
        <div className={cn('content')}>
          {children}
          <CartTotalPrice totalPrice={totalPrice} totalItemsCount={totalItemsCount}/>
        </div>
      </dialog>
    </div>,
    document.getElementById("portal")
  );
}

CartModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired
};

CartModal.defaultProps = {
  open: false,
  onClose: () => {
  }
}

export default React.memo(CartModal);
