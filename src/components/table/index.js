import React from 'react';
import { useTable, useSortBy } from 'react-table'
import { isEmpty } from "../../helpers";
import { Icon } from "../icon";
import './style.less';

export const Table = (props) => {
    const { columns, data, searchResult } = props;
    const result = !isEmpty(searchResult) ? searchResult : data;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data: result,
    },
        useSortBy,
        )

    return (
        <table className="table" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            <span className="th-sort">
                                {column.render('Header')}
                                {column.isSorted
                                ? column.isSortedDesc
                                    ? <Icon name="sort-asc" />
                                    : <Icon name="sort-desc" />
                                : ''}
                            </span>
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}