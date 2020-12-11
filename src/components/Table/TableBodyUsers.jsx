import React from 'react';
import {
    TableBody,
    TableCell,
    TableRow,
} from '@material-ui/core';
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from '@material-ui/icons/Check';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux'
import { concatsArrData } from '../../store/sliceStore/mainSlice';

export default function TableBodyUsers({ data }) {

    // const con = useSelector(state => state.main.con)

    // const dispatch = useDispatch();

    // React.useEffect(() => {
    //     (data === undefined && '') || dispatch(concatsArrData(data))
    // }, [data])

    // console.log(con)

    const date = new Date()

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
                        <TableCell><Moment format="YYYY/MM/DD">{el.birthday}</Moment></TableCell>
                        <TableCell>{el.card_id}</TableCell>
                        <TableCell>{(el.inside === false && <BlockIcon style={{color: 'red'}} />) || <CheckIcon style={{color: 'green'}}/>}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    );
}