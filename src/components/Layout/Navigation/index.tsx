import React from 'react';
import {useLocation} from "react-router-dom";

import styles from './styles.module.scss'
import Item, {ItemProps} from "./Item";

import I18n from "../../../services/I18n";

import {
    dashboard, dashboardLight, history, historyLight, training, trainingLight, inbox, inboxLight, more, moreLight
} from '../../../static/icon/menu'

export interface NavigationProps {
    title?: string;
}

const navItems = [{
    title: I18n.t('dashboard.title'),
    to: '/',
    icon: dashboardLight,
    activeIcon: dashboard,
    active: false

}, {
    title: I18n.t('history.title'),
    to: '/history',
    icon: historyLight,
    activeIcon: history,
    active: false

}, {
    title: I18n.t('training.title'),
    to: '/training',
    icon: trainingLight,
    activeIcon: training,
    active: false

}, {
    title: I18n.t('inbox.title'),
    to: '/inbox',
    icon: inboxLight,
    activeIcon: inbox,
    active: false

}, {
    title: I18n.t('more.title'),
    to: '/more',
    icon: moreLight,
    activeIcon: more,
    active: false

}] as ItemProps[];

const Navigation: React.FC<NavigationProps> = ({title = ''}) => {
    const location = useLocation();
    const itemIsActive = (to: string) => location.pathname === to;

    return (
        <div className={styles.nav}>
            {navItems.map(item => <Item key={item.title} {...item} active={itemIsActive(item.to)}/>)}
        </div>
    );
};


export default Navigation;