import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
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

export default function MenuPanel() {

    const classes = useRegistrationStyle();

    return (
        <div>
            <Grid className={classes.root} container spacing={5}>
                <Grid container item xs={12} xl={12} sm={12} md={12} lg={12} spacing={5}>
                    <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Button className={classes.blockPanelMenu}>
                                <SecurityIcon fontSize="large"/> Безопасность
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Button className={classes.blockPanelMenu}>
                                <MailOutlineIcon fontSize="large"/> Почта
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Button className={classes.blockPanelMenu}>
                                <HelpOutlineIcon fontSize="large"/> Поддержка
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} xl={12} sm={12} md={12} lg={12} spacing={5}>
                    <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Button className={classes.blockPanelMenu}>
                                <DescriptionIcon fontSize="large"/> Документы
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Button className={classes.blockPanelMenu}>
                                <GroupAddIcon fontSize="large"/> Регистрация
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Button className={classes.blockPanelMenu}>
                                <DetailsIcon fontSize="large"/> Турникет
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} xl={12} sm={12} md={12} lg={12} spacing={5}>
                    <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Button className={classes.blockPanelMenu}>
                                <PersonIcon fontSize="large"/>Пользователи
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Button className={classes.blockPanelMenu}>
                                <DvrIcon fontSize="large"/> О системе
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} xl={4} sm={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Button className={classes.blockPanelMenu}>
                                <ExitToAppIcon fontSize="large"/> Выход
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
