import React from 'react';
// Componets UI
import { Button, Grid, Paper } from '@material-ui/core';
// Material Icon
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DvrIcon from '@material-ui/icons/Dvr';
// Reducers & actions
import { changeModalInfoSystemState } from '../../../store/sliceStore/modalsSlice';

export default function FooterPanel({ classes, dispatch }) {

    const handleClickOpenInfoSystemModal = React.useCallback((event) => {
        dispatch(changeModalInfoSystemState(true))
    });

    return (
        <React.Fragment>
            <Grid container item xs={12} xl={12} sm={12} md={12} lg={12} spacing={5}>
                <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <Button className={classes.blockPanelMenu}>
                            <PersonIcon fontSize="large" />Пользователи
                            </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <Button onClick={handleClickOpenInfoSystemModal} className={classes.blockPanelMenu}>
                            <DvrIcon fontSize="large" /> О системе
                            </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <Button className={classes.blockPanelMenu}>
                            <ExitToAppIcon fontSize="large" /> Выход
                            </Button>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
