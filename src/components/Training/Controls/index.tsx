import React, {useEffect, useState} from 'react';


import styles from './styles.module.scss'
import IconButton from "../../Html/IconButton";
import {STATUS} from "../../../container/Training";
import {joinClass} from "../../../utils/joinClass";

import play from '../../../static/icon/play.svg';
import pause from '../../../static/icon/pause.svg';
import stop from '../../../static/icon/stop.svg';

interface ControlsProps {
    status: string;
    onCLick: () => void;
    onCLickStop: () => void;
}

const Controls: React.FC<ControlsProps> = ({status, onCLick, onCLickStop}) => {
    const [showStopBtn, setShowStopBtn] = useState(status === 'PAUSED');

    useEffect(() => {
        if (showStopBtn && status !== 'PAUSED') {
            setShowStopBtn(false);
        } else if (!showStopBtn && status === 'PAUSED') {
            setShowStopBtn(true);
        }
    }, [showStopBtn, status]);

    return (
        <div className={styles.controls}>
            <IconButton
                onClick={onCLick}
                className={joinClass(styles.startBtn, status === STATUS.PAUSED ? styles.pausedButton : '')}
            >
                <img src={status === STATUS.STARTED ? pause : play} alt={'Stop'}/>
            </IconButton>
            <IconButton
                onClick={onCLickStop}
                className={joinClass(styles.stopBtn, status === STATUS.PAUSED ? styles.stopVisible : '')}
            >
                <img src={stop} alt={'Stop'}/>
            </IconButton>
        </div>
    )
};


export default Controls;