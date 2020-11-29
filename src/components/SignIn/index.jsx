import React from 'react';
// Libs
import { useHistory } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Container,
  Typography,
  CssBaseline,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Components
import Copyright from "./Copyright";
// Style
import { textFieldLogin, textFieldPassword, useStyles } from './signInStyle';

export default function SignIn() {

  // Hook для смены url => history.push(имя куда нужно перейти то есть путь)
  const history = useHistory();

  // Состояния данных
  const [dataForm, setDataFrom] = React.useState([]);

  // Стили
  const classes = useStyles();

  // Ссылка на форму
  const formSignInRef = React.useRef(null);

  // Тут должен быть эффект componentDidMount который будет сверять каждый раз localStorage и обрабатывать его если он есть
  React.useEffect(() => {
    // Обновляет localStorage отсылает запросы
  }, []);

  const getDataFrom = (event) => {
    event.preventDefault();
    let result = [];

    Object.values(formSignInRef.current.elements).forEach(element => {
      if ((element.id === 'login' || element.id === 'password') && element.nodeName === 'INPUT') {
        result.push(element.value);
        element.value = '';
      } else if (element.defaultValue === 'remember') {
        result.push(element.checked);
      }
    });
    // Тут должна быть функция которая кладет все даные в локал сторадж
    history.push("menu")
    setDataFrom(result.splice(0, 3));
  }
  console.log(formSignInRef)
  console.log(dataForm);

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in <b>DedSec</b>
          </Typography>
          <form
              onSubmit={getDataFrom}
              ref={formSignInRef}
              className={classes.form}
              noValidate
          >
            <TextField
                {...textFieldLogin}
                required
                fullWidth
                autoFocus
            />
            <TextField
                {...textFieldPassword}
                required
                fullWidth
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
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
