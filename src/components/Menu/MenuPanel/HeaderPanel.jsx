import React from 'react';

// Componets UI
import { Button, Grid, Paper } from '@material-ui/core';
// Material Icon
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SecurityIcon from '@material-ui/icons/Security';


export default function HeaderPanel({ classes, dispatch }) {
    return (
        <React.Fragment>
            <Grid container item xs={12} xl={12} sm={12} md={12} lg={12} spacing={5}>
                <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <Button className={classes.blockPanelMenu}>
                            <SecurityIcon fontSize="large" /> Безопасность
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <Button className={classes.blockPanelMenu}>
                            <MailOutlineIcon fontSize="large" /> Почта
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                    <Paper className={classes.paper}>
                        <Button className={classes.blockPanelMenu}>
                            <HelpOutlineIcon fontSize="large" /> Поддержка
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
