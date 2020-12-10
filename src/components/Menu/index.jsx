import React from 'react';
// Libs
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { useSelector, useDispatch } from 'react-redux';
// Material-Ui Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import Brightness7TwoToneIcon from '@material-ui/icons/Brightness7TwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
// Material-Ui Components
import {
    AppBar,
    Tabs,
    Tab,
    Typography,
    Zoom,
    Fab,
    Box, 
    Paper,
    Collapse,
} from '@material-ui/core';
// Hook Material-Ui
import { useStyles } from './menu-style';
import { useTheme } from '@material-ui/core/styles';
// Context App
import { MainContext } from '../../context';
// Component
import MenuPanel from './MenuPanel';
import TableUsers from '../Table';
import { responseDataMock } from '../../store/sliceStore/mainSlice';
// import EditIcon from '@material-ui/icons/Edit';
// import { green } from '@material-ui/core/colors';

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

    const dispatch = useDispatch();

    const token = useSelector(state => state.main.token);

    const mock = useSelector(state => state.main.mock);

    const [value, setValue] = React.useState(0);
    const [checked, setChecked] = React.useState(false);

    const handleModeTheme = React.useCallback((event) => setDarkMode(!darkMode)) 

    const handleChange = React.useCallback((event, newValue) => setValue(newValue));

    const handleChangeIndex = React.useCallback((index) => setValue(index));

    const handleClickRegistration = React.useCallback((event) => setChecked(!checked))

    React.useEffect(() => {
        setInterval(() => {
            dispatch(responseDataMock(token))
        }, 2000)
    }, [token])

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary',
            className: classes.fab,
            // Реализовать смену темы на разные кнопки
            icon: <Brightness7TwoToneIcon onClick={handleModeTheme} />,
            label: 'Add',
        },
        {
            color: 'secondary',
            className: classes.fab,
            icon: <FavoriteIcon  />,
            label: 'Edit',
        },
        {
            color: '',
            className: clsx(classes.fab, classes.fabGreen),
            icon: <AddCircleTwoToneIcon onClick={handleClickRegistration} />,
            label: 'Expand',
        },
    ];

    return (
        <Paper
            style={{ height: '87vh' }}
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
                        <Tab label="Меню" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <TableUsers data={mock}/>
                    </TabPanel>

                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <TableUsers data={mock}/>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <Collapse timeout={3000} in={checked}>
                            <MenuPanel />
                        </Collapse>
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



TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};