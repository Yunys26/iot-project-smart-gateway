import React from 'react';
import {
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core'


export default function TableHeadUsers (props) {
    return (
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>Фамилия</TableCell>
                <TableCell>Должность</TableCell>
                <TableCell>Пол</TableCell>
                <TableCell>Дата рождения</TableCell>
                <TableCell>ID карты</TableCell>
                <TableCell>В помещении</TableCell>
            </TableRow>
        </TableHead>
    );
}