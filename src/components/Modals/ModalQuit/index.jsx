import React from 'react';
import {
    Modal,
    Backdrop,
    Fade,
    Button
} from '@material-ui/core';
import { useStyles } from './style';
import { useSelector } from 'react-redux';
import { changeModalQuitState } from '../../../store/sliceStore/modalsSlice';
import { useHistory } from 'react-router-dom';

export default function ModalQuit ({ dispatch }) {

    const classes = useStyles();

    const modalState = useSelector(state => state.modals.modalsQuitStore);

    const handleClose = () => dispatch(changeModalQuitState(false));
    
    const handleClickClose = React.useCallback(() => {
        window.close();
        localStorage.clear();
    })

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
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleClickClose}>Выход</Button>
                </div>
            </Fade>
        </Modal>
    );
}