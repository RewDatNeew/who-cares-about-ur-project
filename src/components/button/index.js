import React, { useEffect, useState } from 'react';
import className from 'classnames';
import './style.less';

export const ButtonComponent = ({ title, onClick, style = 'primary', cn = '' }) => {
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 1200);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
        <button
            className={className("btn", style, cn)}
            onClick={e => {
                let rect = e.target.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                setCoords({ x, y });
                onClick && onClick(e);
            }}
        >
            {isRippling ? (
                <span
                    className="ripple"
                    style={{
                        left: coords.x + 10,
                        top: coords.y
                    }}
                />
            ) : (
                ""
            )}
            <span className="content">{title}</span>
        </button>
    );
}
