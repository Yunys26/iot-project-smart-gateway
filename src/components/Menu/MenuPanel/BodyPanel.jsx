import React from 'react'
// Componets UI
import { Button, Grid, Paper } from '@material-ui/core';
// Material Icon
import DescriptionIcon from '@material-ui/icons/Description';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import DetailsIcon from '@material-ui/icons/Details';
// Reducers & actions
import { 
    changeModalDocumentState,
    changeModalRegState,
    changeModalTurState,
} from '../../../store/sliceStore/modalsSlice';


export default function BodyPanel({ classes, dispatch }) {

    const handleClickOpenDocModal = React.useCallback((event) => dispatch(changeModalDocumentState(true)));

    const handleClickOpenRegModal = React.useCallback((event) => dispatch(changeModalRegState(true)));

    const handleClickOpenTurModal = React.useCallback((event) => dispatch(changeModalTurState(true)));

    return (
        <React.Fragment>
            <Grid container item xs={12} xl={12} sm={12} md={12} lg={12} spacing={5}>
                <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <Button onClick={handleClickOpenDocModal} className={classes.blockPanelMenu}>
                            <DescriptionIcon fontSize="large" /> Документы
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <Button onClick={handleClickOpenRegModal} className={classes.blockPanelMenu}>
                            <GroupAddIcon fontSize="large" /> Регистрация
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <Button onClick={handleClickOpenTurModal} className={classes.blockPanelMenu}>
                            <DetailsIcon fontSize="large" /> Турникет
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
