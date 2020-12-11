import {
    makeStyles
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
// Input Login
export const textFieldLogin = {
    variant: 'outlined',
    margin: 'normal',
    id: 'login',
    label: 'Login',
    name: 'login',
    autoComplete: 'login',
    required: true,
    fullWidth: true,
    autoFocus: true,
};
// Input Password
export const textFieldPassword = {
    variant: 'outlined',
    margin: 'normal',
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    autoComplete: 'current-password',
    required: true,
    fullWidth: true,
}
// Button SigIn
export const buttonSignIn = {
    type: 'submit',
    fullWidth: true,
    variant: 'contained',
    color: 'primary',
}