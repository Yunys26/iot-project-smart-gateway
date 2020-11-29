import { makeStyles } from "@material-ui/core";
// import { green, purple, blue } from "@material-ui/core/colors";

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
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: 'inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)',
        }
    },
    blockPanelMenu: {
        width: '100%',
        padding: theme.spacing(10),
    }
}));
