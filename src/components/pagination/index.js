import React from 'react';
import { PerPage, Pager } from "./components";
import './style.less';

export const Pagination = (props) => {
    const {
        totalElements = null,
        size = 10,
        page = 0,
        updateStore = () => console.log('updateStore'),
        changeValuePerPage = () => console.log('changeValuePerPage'),
        changePageNumber = () => console.log('changePageNumber'),
    } = props;

    return (
        <div className="containerPagination">
            <div className="controls">
                <div className="group">
                    {totalElements !== 0
                        ? <div><small><em>на странице по:</em></small>
                            <PerPage
                                size={size}
                                changeValuePerPage={changeValuePerPage}
                                updateStore={updateStore}
                            /></div>
                        : null}
                    {totalElements ? <div className="perPage">
                        <small><em>всего</em></small>
                        <span>{totalElements}</span>
                    </div> : null}
                    {totalElements > size
                        ? <Pager
                            changePageNumber={changePageNumber}
                            total={totalElements}
                            pageNumber={page + 1}
                            rowsPerPage={size}
                        /> : null}
                </div>
            </div>
        </div>
    )
}