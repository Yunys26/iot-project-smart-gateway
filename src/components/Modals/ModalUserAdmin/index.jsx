import React from 'react';
import {
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core';
import { useStyles } from '../ModalRegUsers/style';
import { useSelector } from 'react-redux';
import { changeModalUserAdminState } from '../../../store/sliceStore/modalsSlice';

export default function ModalUserAdmin ({ dispatch }) {

    const classes = useStyles();

    const modalState = useSelector(state => state.modals.modalsUserAdminStore);

    const handleClose = () => dispatch(changeModalUserAdminState(false));

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
                    <h2 id="transition-modal-title">Modal Admin</h2>
                    <p id="transition-modal-description">Admin User</p>
                </div>
            </Fade>
        </Modal>
    );
}