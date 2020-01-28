import React from 'react';

import Layout from "../../components/Layout/Layout";
import I18n from "../../services/I18n";


const More: React.FC = () => {
    return (
        <Layout
            header={{
                title: I18n.t('more.title')
            }}
        >
        </Layout>
    )
};


export default More;