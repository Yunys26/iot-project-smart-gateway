import React from 'react';
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

import { useStyles } from './signInStyle';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {

  const [dataForm, setDataFrom] = React.useState([]);

  const classes = useStyles();

  const formSignInRef = React.useRef(null);

  const getDataFrom = (e) => {
    e.preventDefault();
    
    let result = [];

    Object.values(formSignInRef.current.elements).forEach(element => {
      if ((element.id === 'email' || element.id === 'password') && element.nodeName === 'INPUT') {
        result.push(element.value);
      } else if (element.defaultValue === 'remember') {
        result.push(element.checked);
      }
    });
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
          Sign in
        </Typography>
        <form
          onSubmit={getDataFrom}
          ref={formSignInRef}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
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
