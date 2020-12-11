import {
    makeStyles
} from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export const textFieldsName = {
    variant: 'filled',
    label: 'Имя'
}

export const textFieldsSurname = {
    variant: 'filled',
    label: 'Фамилия'
}

export const textFieldsPosition = {
    variant: 'filled',
    label: 'Должность'
}

export const textFieldsGenderMen = {
    value:'start',
    label:'М',
    labelPlacement:'start'
}

export const textFieldsGenderWomen = {
    value: 'start',
    label: 'Ж',
    labelPlacement: 'start'
}

export const textFieldsBirthday = {
    id:'date',
    label:'Дата рождения',
    type: 'date',
    variant: 'filled'
}

export const textFieldsCardID = {
    variant: 'filled',
    label: 'ID карты'
}