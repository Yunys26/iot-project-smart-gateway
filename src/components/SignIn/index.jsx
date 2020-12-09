import React from 'react';
// Libs
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Container,
  Typography,
  CssBaseline,
  CircularProgress,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import BlockIcon from '@material-ui/icons/Block';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Components
import Copyright from "./Copyright";
// Style & attribut's
import { buttonSignIn, textFieldLogin, textFieldPassword, useStyles } from './signIn-style';

import { responseDataFrom } from '../../store/sliceStore/mainSlice';

export default function SignIn() {

  // Hook для смены url => history.push(имя куда нужно перейти то есть путь)
  const history = useHistory();

  const dispatch = useDispatch();

  const dataFormSignIn = useSelector(state => state.main.dataFormSignIn);

  // Стили
  const classes = useStyles();

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remeberMe, setRemeberMe] = React.useState(false);

  const handleChangeLogin = React.useCallback((event) => setLogin(event.target.value));
  const handleChangePassword = React.useCallback((event) => setPassword(event.target.value));
  const handleClickRemeberMe = React.useCallback((event) => setRemeberMe(!remeberMe));
  
  // Проверка на сохранение данных или нет
  const handleSubmitFormReg = React.useCallback((event) => {
    event.preventDefault();
    const result = JSON.stringify({
      login: login,
      password: password,
    });
    
    if (remeberMe === true) {
      localStorage.setItem('regUser', result)
      history.push('/menu');
    } else if (remeberMe === false) {
      history.push('/menu');
    }
  })

  const conditionsIcons = React.useCallback(() => {
    if ( dataFormSignIn === 'next' ) {
      return <LockOpenIcon />
    } else if ( dataFormSignIn === 'loading' ) {
      return <AccessTimeIcon />
    } else if ( dataFormSignIn === 'error' ) {
      return <BlockIcon />
    }
    return <LockOutlinedIcon />
  }, [dataFormSignIn]);
  
  // Проверка на наличие даных в local
  // React.useEffect(() => {
  //   console.log(1)
  //   if ( localStorage.getItem('regUser') !== null ) {
  //     history.push('/menu')
  //   }
  // }, [history])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {conditionsIcons()}
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign in <b>DedSec</b>
        </Typography>
        <form
          // onSubmit={handleSubmitFormReg}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(responseDataFrom(login, password))}
          }
          className={classes.form}
          noValidate
        >
          <TextField
            {...textFieldLogin}
            onChange={handleChangeLogin}
            value={login}
          />
          <TextField
            {...textFieldPassword}
            onChange={handleChangePassword}
            value={password}
          />
          <FormControlLabel
            control={
              <Checkbox 
                color="primary"
                onClick={handleClickRemeberMe}
                checked={remeberMe}
              />
            }
            label="Remember me"
          />
          <Button
            className={classes.submit}
            {...buttonSignIn}
          >
            { ( dataFormSignIn === 'loading' && <CircularProgress color="secondary" /> ) || 'Sign In'}
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
              Forgot password?
            </Link> */}
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      { 
        dataFormSignIn === 'error' && 
        <Alert severity="error">
          <AlertTitle>Ошибка</AlertTitle>
          Введенные даные не правильные
        </Alert>
      }
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
