import React from 'react';
import classNames from 'classnames';
import MaskedInput from 'react-text-mask';
import { ButtonComponent as Button } from "../../../button";

import './style.less';

export const Pager = ({
    changePageNumber = () => console.log('changePageNumber'),
    total,
    pageNumber,
    rowsPerPage,
  }) => {

    const handleClick = (current) => {
        changePageNumber(current);
    }

    const range = (start, end, pageNumber) => {
        const foo = [];
        for (let i = start; i <= end; i++) {
            if (i === pageNumber) {
                foo.push({ text: i, state: 'current' });
            } else if (i < 3 || i > end - 2 || i === pageNumber - 1 || i === pageNumber + 1) {
                foo.push({ text: i, state: 'link' });
            } else {
                foo.push({ text: '...', state: 'points' });
            }
        }

        const removeDouble = (ar, name, sep) => {
            let rubicon = false;
            let double = false;
            const newAr = [];
            ar.forEach((m) => {
                if (m.state === name && !double && !rubicon) {
                    newAr.push(m);
                    double = true;
                } else if (m.state === sep) {
                    newAr.push(m);
                    double = false;
                    rubicon = true;
                } else if (m.state === name && !double) {
                    newAr.push(m);
                    double = true;
                } else if (m.state !== name) {
                    newAr.push(m);
                }
            });
            return newAr;
        };
        return removeDouble(foo, 'points', 'current');
    };

    const test = Number(rowsPerPage) === 0 ? 1 : rowsPerPage;
    const count = Math.ceil(total / test);

    return (
            <div className="pagination">
                <div className={classNames('ul')}>
                    {/* eslint-disable-next-line array-callback-return,consistent-return */}
                    {range(1, count, pageNumber).map((idx, i) => {
                        if (idx.state === 'current') { return <Button cn="current" key={i} title={idx.text}/>; }
                        if (idx.state === 'link') {
                            return <Button
                                key={i}
                                title={idx.text}
                                onClick={(e) => {
                                        e.target.blur();
                                        handleClick(+idx.text);
                                    }}
                            />;
                        }
                        if (idx.state === 'points') {
                            return <div
                                className="points"
                                key={i}
                            >
                                <MaskedInput
                                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                                    className="input"
                                    guide={false}
                                    onKeyPress={(e) => {
                                        const value = e.target.value.trim().replace(/[^0-9.]/g, '');
                                        if (e.charCode === 13 && +value > 0) {
                                            handleClick(+value <= +count ? +value : +count);
                                            e.target.blur();
                                        }
                                    }}
                                    onBlur={(e) => {
                                        e.target.value = '';
                                    }}
                                    placeholder={idx.text}
                                />
                            </div>;
                        }
                    })}
                </div>
            </div>
    )
}
