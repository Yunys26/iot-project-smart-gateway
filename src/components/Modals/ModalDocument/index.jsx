import React from 'react';
import {
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core';
import { useStyles } from './style';
import { useSelector } from 'react-redux';
import { changeModalDocumentState } from '../../../store/sliceStore/modalsSlice';

export default function ModalDocument ({ dispatch }) {

    const classes = useStyles();

    const modalState = useSelector(state => state.modals.modalsDocumentStore);

    const handleClose = () => dispatch(changeModalDocumentState(false));

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
                    <h2 id="transition-modal-title">Modal Doc</h2>
                    <p id="transition-modal-description">Doc User</p>
                </div>
            </Fade>
        </Modal>
    );
}