import React, {HTMLAttributes} from 'react';

import styles from './styles.module.scss'
import {joinClass} from "../../../utils/joinClass";

const IconButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({children, className = '', ...restProps}) => {
    return (
        <button className={joinClass(styles.button, className)} {...restProps}>
            {children}
        </button>
    )
};


export default IconButton;