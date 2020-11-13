import React from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import { useRegistrationStyle } from './registration-style';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SecurityIcon from '@material-ui/icons/Security';
import DescriptionIcon from '@material-ui/icons/Description';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import DetailsIcon from '@material-ui/icons/Details';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DvrIcon from '@material-ui/icons/Dvr';

export default function Registration() {

    const classes = useRegistrationStyle();


    return (
        <div>
            <Grid className={classes.root} container spacing={5}>
                <Grid container item xs={12} spacing={5}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><SecurityIcon fontSize="large"/>Безопасность</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><MailOutlineIcon fontSize="large"/>Почта</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><HelpOutlineIcon fontSize="large"/>Поддержка</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={5}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><DescriptionIcon fontSize="large"/>Документы</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><GroupAddIcon fontSize="large"/>Регистрация</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><DetailsIcon fontSize="large"/>Турникет</Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={5}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><PersonIcon fontSize="large"/>Пользователи</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><DvrIcon fontSize="large"/>О системе</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><ExitToAppIcon fontSize="large"/>Выход</Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
