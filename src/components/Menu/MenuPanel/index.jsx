import React from 'react';
// Libs
import { useDispatch } from 'react-redux';
// Componets UI
import { Grid } from '@material-ui/core';
// Style
import { useRegistrationStyle } from './registration-style';
// Components
import HeaderPanel from './HeaderPanel';
import BodyPanel from './BodyPanel';
import FooterPanel from './FooterPanel';

export default function MenuPanel() {

    const classes = useRegistrationStyle();
    
    const dispatch = useDispatch();

    return (
        <div>
            <Grid className={classes.root} container spacing={5}>
                <HeaderPanel classes={classes} dispatch={dispatch}/>
                <BodyPanel classes={classes} dispatch={dispatch}/>
                <FooterPanel classes={classes} dispatch={dispatch}/>
            </Grid>
        </div>
    )
}
