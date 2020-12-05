import React from 'react';
import {
    Modal,
    Backdrop,
    Fade,
    TextField,
    Grid,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Tooltip,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    Container,
    AccordionDetails
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useStyles } from './style';
import { useSelector } from 'react-redux';
import { changeModalUserAdminState } from '../../../store/sliceStore/modalsSlice';

export default function ModalUserAdmin({ dispatch }) {

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
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography><strong>Регистраця Администраторов</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid
                                direction='column'
                                justify='center'
                                alignItems='center'
                                container
                                spacing={3}
                            >
                                <Grid item xs={12}>
                                    <Tooltip title="Введите почту">
                                        <TextField
                                            label='Логин'
                                            variant='filled'
                                            onChange={(e) => console.log(e.target.value)}
                                            autoFocus
                                        >
                                        </TextField>
                                    </Tooltip>

                                </Grid>
                                <Grid item xs={12}>
                                    <Tooltip title="Введите пароль">
                                        <TextField
                                            label='Пароль'
                                            type='password'
                                            variant='filled'
                                            onChange={(e) => console.log(e.target.value)}
                                        >
                                        </TextField>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined">Сбросить</Button>
                                    <Button variant="outlined" color="primary" className={classes.regButton}>Зарегистрироваться</Button>
                                </Grid>

                            </Grid>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography><strong>Таблица администраторов</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Логин</TableCell>
                                        <TableCell>Пароль</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">aliev-unys@rambler.ru</TableCell>
                                        <TableCell>123131</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Fade>
        </Modal>
    );
}