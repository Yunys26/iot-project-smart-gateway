import React from 'react';
import {
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core';
import { useStyles } from '../ModalRegUsers/style';
import { useSelector } from 'react-redux';
import { changeModalTurState } from '../../../store/sliceStore/modalsSlice';

export default function ModalTur ({ dispatch }) {

    const classes = useStyles();

    const modalState = useSelector(state => state.modals.modalsTurStore);

    const handleClose = () => dispatch(changeModalTurState(false));

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
                    <h2 id="transition-modal-title">Modal Tur</h2>
                    <p id="transition-modal-description">Tur User</p>
                </div>
            </Fade>
        </Modal>
    );
}