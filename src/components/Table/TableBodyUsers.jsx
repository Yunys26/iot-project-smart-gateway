import React from 'react';
import {
    TableBody,
    TableCell,
    TableRow,
} from '@material-ui/core'

export default function TableBodyUsers(props) {
    return (
        <TableBody>
            <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Алиев</TableCell>
                <TableCell>Юнус</TableCell>
                <TableCell>Алиевич</TableCell>
                <TableCell>Генеральный директор</TableCell>
                <TableCell>26.03.2000</TableCell>
                <TableCell>18912</TableCell>
                <TableCell>Да</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Крутяков</TableCell>
                <TableCell>Антон</TableCell>
                <TableCell>Викторович</TableCell>
                <TableCell>Генеральный директор</TableCell>
                <TableCell>30.01.1999</TableCell>
                <TableCell>11912</TableCell>
                <TableCell>Да</TableCell>
            </TableRow>
        </TableBody>
    );
}