import React from 'react';

import Layout from "../../components/Layout/Layout";
import I18n from "../../services/I18n";


const Inbox: React.FC = () => {
    return (
        <Layout
            header={{
                title: I18n.t('inbox.title')
            }}
        >
        </Layout>
    )
};


export default Inbox;