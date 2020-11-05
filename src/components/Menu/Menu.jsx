import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
// import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import { useStyles } from './menuStyles';
import { Paper } from '@material-ui/core';

import {
    Switch,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableFooter,
} from '@material-ui/core';
import { MainContext } from '../../context';
import FavoriteIcon from '@material-ui/icons/Favorite';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

export default function FloatingActionButtonZoom() {
    const { setDarkMode, darkMode } = React.useContext(MainContext);
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleModeTheme = (e) => {
        setDarkMode(!darkMode)
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary',
            className: classes.fab,
            // Реализовать смену темы на разные кнопки
            icon: <AddIcon onClick={handleModeTheme} />,
            label: 'Add',
        },
        {
            color: 'secondary',
            className: classes.fab,
            icon: <FavoriteIcon onClick={handleModeTheme}/>,
            label: 'Edit',
        },
        {
            color: '',
            className: clsx(classes.fab, classes.fabGreen),
            icon: <UpIcon onClick={handleModeTheme}/>,
            label: 'Expand',
        },
    ];

    return (
        <Paper
            style={{height: '87vh'}}
            className={classes.mainBox}
        >
            {/* <Switch color="primary" size="medium" checked={darkMode} onChange={handleModeTheme} /> */}
            <div className={classes.menu}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab label="Пользователи" {...a11yProps(0)} />
                        <Tab label="Активные пользователи" {...a11yProps(1)} />
                        <Tab label="Регистрация" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>

                                </TableRow>
                            </TableBody>
                            <TableFooter>
                                <TableRow>

                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>

                                </TableRow>
                            </TableBody>
                            <TableFooter>
                                <TableRow>

                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>

                    </TabPanel>
                </SwipeableViews>
                {fabs.map((fab, index) => (
                    <Zoom
                        key={fab.color}
                        in={value === index}
                        timeout={transitionDuration}
                        style={{
                            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                        }}
                        unmountOnExit
                    >
                        <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
                            {fab.icon}
                        </Fab>
                    </Zoom>
                ))}
            </div>
        </Paper>
    );
}
