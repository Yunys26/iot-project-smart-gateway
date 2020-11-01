import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
// Style
import { useStyles } from './menuStyle';

export default function Menu(props) {

    // Стили
    const classes = useStyles();
    // Доступ к храгилищу mock
    // const mock = useSelector(state => state.main.mock);

    return (
        <div>
            Hello world
            <Box>
                {/* Тут будут отображаться данные приложенной карты */}
            </Box>
        </div>
    )
}
