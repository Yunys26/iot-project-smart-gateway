import { makeStyles } from "@material-ui/core";

// export const themeMain
export const useStyles = makeStyles((theme) => ({
    mainBox: {
        border: '5px solid rgb(63, 81, 181)',
        margin: theme.spacing(8),
        padding: theme.spacing(1),
        transition: '0.5s',
        '&:hover': {
            transition: '1s',
            border: '5px solid rgb(44, 70, 201)',
        }
    },
    tableContainer: {
        border: '2px solid rgb(63, 81, 181)',
        transition: '0.5s',
        '&:hover': {
            transition: '1s',
            border: '5px solid rgb(44, 70, 201)',
        }
    }
    
}));