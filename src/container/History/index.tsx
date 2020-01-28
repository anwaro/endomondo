import React from 'react';

import Layout from "../../components/Layout/Layout";
import I18n from "../../services/I18n";


const History: React.FC = () => {
    return (
        <Layout
            header={{
                title: I18n.t('history.title')
            }}
        >
        </Layout>
    )
};


export default History;