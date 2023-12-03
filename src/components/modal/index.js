import React from "react";
import PropTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import {createPortal} from "react-dom";
import './style.css';

function Modal({open, onClose, children}) {

  const cn = bem("Modal")

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
        {children}
      </dialog>
    </div>,
    document.getElementById("portal")
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

Modal.defaultProps = {
  open: false,
  onClose: () => {
  },
  children: null
}

export default React.memo(Modal);
