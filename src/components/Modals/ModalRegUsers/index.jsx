
import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../ModalRegUsers/style';
import { useSelector } from 'react-redux';
import { changeModalRegState } from '../../../store/sliceStore/modalsSlice';


export default function ModalRegUsers({ dispatch }) {
  
  const classes = useStyles();

  const modalState = useSelector(state => state.modals.modalsRegStore);

  const handleClose = () => {
    dispatch(changeModalRegState(false));
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={modalState}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalState}>
        <div className={classes.paper}>
          {/* DataPicker */}
          <h2 id="transition-modal-title">Modal Registration</h2>
          <p id="transition-modal-description">Registration User</p>
        </div>
      </Fade>
    </Modal>
  );
}