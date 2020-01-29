import React, {useState} from 'react';

import Layout from "../../components/Layout/Layout";
import Information from "../../components/Training/Information";
import Map from "../../components/Training/Map";
import Controls from "../../components/Training/Controls";
import I18n from "../../services/I18n";


export const STATUS = {
    LOADING: 'LOADING',
    READY: 'READY',
    STARTED: 'STARTED',
    PAUSED: 'PAUSED',
};

const Training: React.FC = () => {
    const [status, setStatus] = useState(STATUS.READY);

    const startClick = () => {
        if (status === STATUS.READY || status === STATUS.PAUSED) {
            setStatus(STATUS.STARTED);
        } else if (status === STATUS.STARTED) {
            setStatus(STATUS.PAUSED)
        }
    };


    const stopClick = () => {
        setStatus(STATUS.READY)
    };

    return (
        <Layout
            header={{
                title: I18n.t('training.title')
            }}
        >
            <Information
                speed={0}
            />
            <Map/>
            <Controls
                status={status}
                onCLick={startClick}
                onCLickStop={stopClick}
            />
        </Layout>
    )
};

export default Training;