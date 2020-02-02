import React, {useCallback, useEffect, useState} from 'react';

import {unify} from "../../../utils/event";

let animationFrame = 0;

interface SwiperProps {
    onChange: (percent: number) => void;
    className?: string;
}

const Swiper: React.FC<SwiperProps> = ({onChange, className = '', children}) => {
    const [state, setState] = useState({
        y: 205,
        endY: 205,
        moveY: 0,
        startY: 0,
        isDragged: false,
    });


    const draggingStart = (event: any) => {
        cancelAnimationFrame(animationFrame);
        const {clientY} = unify(event.nativeEvent);
        setState(state => ({...state, isDragged: true, startY: clientY}));
    };

    const dragging = (event: any) => {
        if (state.isDragged) {
            event.preventDefault();
            const {clientY} = unify(event);
            setState(state => ({...state, moveY: clientY - state.startY}));
        }
    };

    const draggingEnd = (event: any) => {
        if (state.isDragged) {
            event.preventDefault();
            setState(state => ({
                ...state,
                y: state.y + state.moveY,
                endY: state.moveY < 0 ? 0 : 205,
                moveY: 0,
                isDragged: false
            }));
        }
    };

    const animate = useCallback((t) => {
        setState(state => {
            let y = state.y + (state.endY - state.y) * 0.2;
            if (Math.abs(state.endY - y) < 2) {
                y = state.endY;
            } else {
                animationFrame = requestAnimationFrame(animate);
            }
            return {...state, y};
        });
    }, [setState]);

    useEffect(() => {
        if (!state.isDragged) {
            animate(2);
        }
    }, [animate, state.isDragged]);

    useEffect(() => {
        onChange((state.moveY + state.y) / 205 * 100);
    }, [onChange, state.moveY, state.y]);

    useEffect(() => {
        document.addEventListener('mouseup', draggingEnd);
        document.addEventListener('touchend', draggingEnd);
        document.addEventListener('mousemove', dragging);
        document.addEventListener('touchmove', dragging);
        return () => {
            document.removeEventListener('mouseup', draggingEnd);
            document.removeEventListener('touchend', draggingEnd);
            document.removeEventListener('mousemove', dragging);
            document.removeEventListener('touchmove', dragging);
        };
    }, [dragging, draggingEnd]);


    return (
        <div
            onMouseDown={draggingStart}
            onTouchStart={draggingStart}
            className={className}
        >
            {children}
        </div>
    )
};


export default Swiper;