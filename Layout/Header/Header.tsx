import React, {FC} from 'react';
import {HeaderProps} from "./Header.props";

import styles from "./Header.module.scss";

const Header:FC<HeaderProps> = ({ ...props}) => {
    return (
        <div {...props} >
            Header
        </div>
    );
};

export default Header;