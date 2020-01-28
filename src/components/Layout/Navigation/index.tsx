import React from 'react';
import {useLocation} from "react-router";

import styles from './styles.module.scss'
import Item, {ItemProps} from "./Item";

import logo from '../../../static/logo.png';
import logoBlack from '../../../static/logo-black.png';
import I18n from "../../../services/I18n";


export interface NavigationProps {
    title?: string;
}

const navItems = [{
    title: I18n.t('dashboard.title'),
    to: '/',
    icon: logo,
    activeIcon: logoBlack,
    active: false

}, {
    title: I18n.t('history.title'),
    to: '/history',
    icon: logo,
    activeIcon: logoBlack,
    active: false

}, {
    title: I18n.t('training.title'),
    to: '/training',
    icon: logo,
    activeIcon: logoBlack,
    active: false

}, {
    title: I18n.t('inbox.title'),
    to: '/inbox',
    icon: logo,
    activeIcon: logoBlack,
    active: false

}, {
    title: I18n.t('more.title'),
    to: '/more',
    icon: logo,
    activeIcon: logoBlack,
    active: false

}] as ItemProps[];

const Navigation: React.FC<NavigationProps> = ({title = ''}) => {
    let location = useLocation();
    console.log(location);
    const itemIsActive = (to: string) => location.pathname === to;

    return (
        <div className={styles.nav}>
            {navItems.map(item => <Item key={item.title} {...item} active={itemIsActive(item.to)}/>)}
        </div>
    );
};


export default Navigation;