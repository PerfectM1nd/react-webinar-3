import React from "react";
import PropTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import Head from "../head";
import {createPortal} from "react-dom";
import CartTotalPrice from "../cart-total-price";
import './style.css';
import Modal from "../modal";
import List from "../list";

function CartModal({open, onClose, totalPrice, totalItemsCount, onDeleteCartItem, cartItems}) {

  const cn = bem("CartModal")

  return (
    <Modal open={open} onClose={onClose}>
      <Head
        title='Корзина'
        button={<button onClick={() => onClose()}>Закрыть</button>}
      />
      <div className={cn('content')}>
        <List
          list={cartItems}
          deletionMode={true}
          onDeleteCartItem={onDeleteCartItem}
        />
        <CartTotalPrice totalPrice={totalPrice} totalItemsCount={totalItemsCount}/>
      </div>
    </Modal>
  );
}

CartModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  totalPrice: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onDeleteCartItem: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
};

export default React.memo(CartModal);
