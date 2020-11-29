import React from 'react';
// Libs
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
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Components
import Copyright from "./Copyright";
// Style & attribut's
import { buttonSignIn, textFieldLogin, textFieldPassword, useStyles } from './signIn-style';

export default function SignIn() {

  // Hook для смены url => history.push(имя куда нужно перейти то есть путь)
  const history = useHistory();

  // Стили
  const classes = useStyles();

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remeberMe, setRemeberMe] = React.useState(false);

  const handleChangeLogin = React.useCallback((event) => setLogin(event.target.value));
  const handleChangePassword = React.useCallback((event) => setPassword(event.target.value));
  const handleClickRemeberMe = React.useCallback((event) => setRemeberMe(!remeberMe));
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

  React.useEffect(() => {
    if ( localStorage.getItem('regUser') !== null ) {
      history.push('/menu')
    }
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign in <b>DedSec</b>
        </Typography>
        <form
          onSubmit={handleSubmitFormReg}
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
            Sign In
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
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
