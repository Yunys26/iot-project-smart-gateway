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
                <TableCell>Фамилия</TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>Пол</TableCell>
                <TableCell>Должность</TableCell>
                <TableCell>Дата рождения</TableCell>
                <TableCell>ID карты</TableCell>
                <TableCell>В помещении</TableCell>
            </TableRow>
        </TableHead>
    );
}