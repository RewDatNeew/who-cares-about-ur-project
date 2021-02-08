import React, { useRef } from 'react';
import classNames from 'classnames';

import { TooltipContainer } from './tooltip-container';
import { useTooltip } from './hook';
import { isEmpty } from '../../helpers';

import './style.less';

export const Tooltip = (props) => {
    const {
        children = null,
        tooltipLabel = null,
        isEllipses = false,
        isFirst = false, // for TableHeader
        isLast = false, // for TableHeader
        position = 'top',
        offset = 0,
        cn = '',
    } = props;

    const spanRef = useRef(null);
    const isShow = !isEmpty(tooltipLabel);

    const {
        mouseLeave,
        mouseOver,
        stateTooltip,
        tooltipRef,
    } = useTooltip({ ref: spanRef, position, offset, isShow, isFirst, isLast });
    const { tooltipClass, tooltipStyle } = stateTooltip;
    return (
        <>
            <span
                ref={spanRef}
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                className={classNames(cn, { ellipsis: isEllipses })}
            >
        {children}
      </span>
            {isShow
                ? (
                    <TooltipContainer
                        position={position}
                        tooltipRef={tooltipRef}
                        tooltipLabel={tooltipLabel}
                        tooltipStyle={tooltipStyle}
                        tooltipClass={tooltipClass}
                    />)
                : null}
        </>
    );
};
