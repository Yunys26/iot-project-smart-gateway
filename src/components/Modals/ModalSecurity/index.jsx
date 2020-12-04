import React from 'react';

import { useSelector } from 'react-redux';

import { changeModalSecurityState } from '../../../store/sliceStore/modalsSlice';

import {
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core';

import { useStyles } from './style';

export default function ModalSecurity ({ dispatch }) {

    const classes = useStyles();

    const modalState = useSelector(state => state.modals.modalsSecurityStore);

    const handleClose = () => dispatch(changeModalSecurityState(false));

    return (
        <React.Fragment>
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
                        <h2 id="transition-modal-title">Modal Security</h2>
                        <p id="transition-modal-description">Security User</p>
                    </div>
                </Fade>
            </Modal>
        </React.Fragment>
    )
}
