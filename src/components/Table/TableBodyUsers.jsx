import React from 'react';
import {
    TableBody,
    TableCell,
    TableRow,
} from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { concatsArrData } from '../../store/sliceStore/mainSlice';

export default function TableBodyUsers({ data }) {

    // const con = useSelector(state => state.main.con)

    // const dispatch = useDispatch();

    // React.useEffect(() => {
    //     (data === undefined && '') || dispatch(concatsArrData(data))
    // }, [data])

    // console.log(con)

    return (
        <TableBody>
            {(data === undefined && '') || data.map((el) => {
                return (
                    <TableRow>
                        <TableCell>{el.id}</TableCell>
                        <TableCell>{el.name}</TableCell>
                        <TableCell>{el.surname}</TableCell>
                        <TableCell>{el.position}</TableCell>
                        <TableCell>{el.gender}</TableCell>
                        <TableCell>{el.birthday}</TableCell>
                        <TableCell>{el.card_id}</TableCell>
                        <TableCell>{el.inside}</TableCell>
                    </TableRow>
                )
            })}
            {/* <TableRow>
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
            </TableRow> */}
        </TableBody>
    );
}