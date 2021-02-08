import React, { useReducer, useRef } from 'react';

const initialState = {
    tooltipStyle: {},
    tooltipClass: '',
};

const getLogicKey = (obj = {}) => {
    const keys = Object.keys(obj) || [];
    return keys.find((item) => obj[item] === true);
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOOLTIP_UPDATE': {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export const useTooltip = ({
         ref,
         position,
         offset = 0,
         isShow = true,
         isFirst = false,
         isLast = false,
         setHandleShow = () => {},
     }) => {
    const tooltipRef = useRef(null);
    const [stateTooltip, dispatch] = useReducer(reducer, initialState);
    const mouseOver = () => {
        setHandleShow(true);
        if (!isShow) return;
        const span = ref.current;
        const pos = span.getBoundingClientRect();
        const tooltip = tooltipRef.current;
        const isShowTooltip = (pos.width - 10) < tooltip.offsetWidth;
        if (!isShowTooltip) {
            return;
        }
        let styleTooltip;
        switch (position) {
            case 'top': {
                // Keep the position of the tooltip visible. (For TableHeader)
                const top = `${pos.top - tooltip.offsetHeight}px`;
                const left = `${pos.left - offset - (tooltip.offsetWidth - pos.width) / 2}px`;
                const posTooltip = {
                    [`${pos.left}px`]: isFirst, // first th
                    [`${pos.left - (tooltip.offsetWidth - pos.width)}px`]: isLast, // last th
                    [left]: true, // default
                };
                const logicLeft = getLogicKey(posTooltip);
                styleTooltip = { top, left: logicLeft };
                break;
            }
            case 'right': {
                const top = `${pos.top - (tooltip.offsetHeight - pos.height) / 2}px`;
                const left = `${pos.left + pos.width}px`;
                styleTooltip = { top, left };
                break;
            }
            case 'bottom': {
                const top = `${pos.top + pos.height}px`;
                const left = `${pos.left - (tooltip.offsetWidth - pos.width) / 2}px`;
                styleTooltip = { top, left };
                break;
            }
            case 'left': {
                const top = `${pos.top - (tooltip.offsetHeight - pos.height) / 2}px`;
                const left = `${pos.left - tooltip.offsetWidth}px`;
                styleTooltip = { top, left };
                break;
            }
            default: {
                const top = `${pos.top - tooltip.offsetHeight}px`;
                const left = `${pos.left - (tooltip.offsetWidth - pos.width) / 2}px`;
                styleTooltip = { top, left };
            }
        }
        const payload = {
            tooltipClass: 'md-show',
            tooltipStyle: { ...styleTooltip, zIndex: 101, pointerEvents: 'all' },
        };
        dispatch({ type: 'TOOLTIP_UPDATE', payload });
    };

    const mouseLeave = () => {
        if (!isShow) return;
        dispatch({ type: 'TOOLTIP_UPDATE', payload: { tooltipClass: 'md-hide' } });
    };


    return {
        mouseLeave,
        mouseOver,
        stateTooltip,
        tooltipRef,
    };
};
