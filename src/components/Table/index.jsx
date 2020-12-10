import React from 'react';
import {
    Table
} from '@material-ui/core';
// Components
import TableHeadUsers from './TableHeadUsers';
import TableBodyUsers from './TableBodyUsers';


export default function TableUsers ({ data }) {
    return (
        <Table>
            <TableHeadUsers />
            <TableBodyUsers data={data}/>
        </Table>
    );
}