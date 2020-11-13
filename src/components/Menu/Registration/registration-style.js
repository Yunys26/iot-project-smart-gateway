import { makeStyles } from "@material-ui/core";
// import { green } from "@material-ui/core/colors";

export const useRegistrationStyle = makeStyles((theme) => ({
    root: {
        overflowY: 'hidden',
        overflowX: 'hidden',
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        overflowY: 'hidden',
        overflowX: 'hidden',
        padding: theme.spacing(10),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
    }
}));
