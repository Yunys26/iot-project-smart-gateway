import React from 'react';
import { 
    Grid, 
    TableContainer, 
    Typography,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableFooter,
    Switch
} from '@material-ui/core';
// Style
import { useStyles } from './menuStyles';
// Context
import { MainContext } from '../../context';

export default function Menu(props) {

    // Стили
    const classes = useStyles();
    // Смена темы
    const { setDarkMode, darkMode } = React.useContext(MainContext);

    // Доступ к храгилищу mock
    // const mock = useSelector(state => state.main.mock);

    const handleModeTheme = (e) => {
        setDarkMode(!darkMode)
    };

    return (
        <Paper
            style={{border: (darkMode && '5px solid #388e3c') || '5px solid rgb(63, 81, 181)'}}
            className={classes.mainBox}
        >
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                    
                </Grid>
                <Grid item align="center" justify="center" xl={8} lg={8} md={8} sm={8}>
                    <Typography variant="h3">Таблица</Typography>
                        <TableContainer 
                            className={classes.tableContainer} 
                            style={{border: (darkMode && '5px solid #388e3c') || '5px solid rgb(63, 81, 181)'}} 
                            component={Paper}
                        >
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
                        </TableContainer>
                        <Typography variant="h3">Активная таблица пользователей</Typography>
                        <TableContainer 
                            className={classes.tableContainer} 
                            style={{border: (darkMode && '5px solid #388e3c') || '5px solid rgb(63, 81, 181)'}} 
                            component={Paper}
                        >
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
                        </TableContainer>
                </Grid>

                <Grid item align="center" justify="center" xl={4} lg={4} md={4} sm={4}>
                    <Typography variant="h3">Регистрация</Typography>
                </Grid>

            </Grid>
        </Paper>
    )
}
