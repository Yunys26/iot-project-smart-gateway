
import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../ModalRegUsers/style';
import { useSelector } from 'react-redux';
import { changeModalInfoSystemState } from '../../../store/sliceStore/modalsSlice';


export default function ModalInfoSystem({ dispatch }) {

  const classes = useStyles();

  const modalState = useSelector(state => state.modals.modalInfoSystemStore);

  const handleClose = () => {
    dispatch(changeModalInfoSystemState(false));
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
          <h2 id="transition-modal-title">Modal System</h2>
          <p id="transition-modal-description">System User</p>
        </div>
      </Fade>
    </Modal>
  );
}