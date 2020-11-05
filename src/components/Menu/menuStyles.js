import {
    makeStyles
} from "@material-ui/core";
import {
    green
} from "@material-ui/core/colors";

// export const themeMain
export const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        }
    },
    mainBox: {
        // border: '5px solid rgb(63, 81, 181)',
        // margin: theme.spacing(8),
        padding: theme.spacing(1),
        transition: '0.5s',
        // '&:hover': {
        //     transition: '1s',
        //     border: '5px solid rgb(44, 70, 201)',
        // }
    },
    tableContainer: {
        // border: '2px solid rgb(63, 81, 181)',
        transition: '0.5s',
        // '&:hover': {
        //     transition: '1s',
        //     border: '2px solid rgb(44, 70, 201)',
        // }
    },


}));