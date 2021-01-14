import React from 'react';
import { isEmpty } from "../../helpers";
import './style.less';

export const Table = (props) => {
    const { data, searchResult, cells, addThs = [], customTd = {} } = props;
    const result = !isEmpty(searchResult) ? searchResult : data;

    const cellMap = (cell) => {
            return <th><span>{cell?.label}</span></th>
    }

    const onTableRow = (row, cells) => {
        return cells
            .map((cell, iCell) => {
                if (row !== null) {
                    return <td key={iCell}>
                        {row[cell?.name] || []}
                    </td>;
                }
            });
    };

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {cells.map((th, i) => (
                            cellMap(th, i)
                        ))}
                        {addThs.map((item) => {
                            return item
                        })}
                    </tr>
                </thead>
                <tbody>
                    {result.map((row, i) => (
                        <tr key={i}>
                            {onTableRow(row, cells)}
                            {customTd(row)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}