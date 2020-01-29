import React, {useCallback, useEffect, useState} from 'react';

import I18n from "../../../services/I18n";

import styles from './styles.module.scss'
import GpsIcon from "./GpsIcon";
import Detail from "./Detail";
import {unify} from "../../../utils/event";
import interpolate, {Extrapolate} from "../../../utils/interpolate";

let animationFrame = 0;

interface InformationProps {
    speed: number;
}

const Information: React.FC<InformationProps> = () => {

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

    const margin = interpolate(
        state.y + state.moveY,
        [0, 205],
        [0, 150],
        Extrapolate.CLAMP
    );

    const fontSize = interpolate(
        state.y + state.moveY,
        [150, 205],
        [45, 100],
        Extrapolate.CLAMP
    );


    const opacity = interpolate(
        state.y + state.moveY,
        [55, 150],
        [0, 1],
        Extrapolate.CLAMP
    );

    return (
        <div
            onMouseDown={draggingStart}
            onTouchStart={draggingStart}
            className={styles.infoCart}
        >
            <div className={styles.row}>
                <span>BIEGANIE</span>
                <GpsIcon/>
            </div>
            <div className={styles.row} style={{marginTop: margin}}>
                <div className={styles.item}>
                    <Detail value={"0.00"} label={"Dystans"}/>
                </div>
                <div className={styles.item}>
                    <Detail
                        valueFontSize={fontSize}
                        value={"0:00"}
                        label={"Czas trwania"}
                        className={styles.mainDetail}
                        style={{transform: `translate(-50%, -${margin}px)`}}
                    />
                    <Detail value={"0:00"} label={"trmpo"} style={{opacity}}/>
                </div>
                <div className={styles.item}>
                    <Detail value={"0"} label={"Kalorie"}/>
                </div>
            </div>
            <div className={styles.handler}/>
        </div>
    )
};


export default Information;