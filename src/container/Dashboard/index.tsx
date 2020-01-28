import React from 'react';

import Layout from "../../components/Layout/Layout";

import I18n from '../../services/I18n';

const Dashboard: React.FC = () => {
    return (
        <Layout
            header={{
                title: I18n.t('dashboard.title')
            }}
        >
        </Layout>
    )
};


export default Dashboard;