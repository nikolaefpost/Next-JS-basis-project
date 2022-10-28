import React, {FC} from 'react';
import {PTagProps} from "./PTag.props";
import cn from "classnames";

import styles from "./PTag.module.scss"
import classNames from "classnames";

const PTag: FC<PTagProps> = ({className, children, fontSize= 16, ...props}) => {

    return (
        <p className={cn(className, styles.content,
            {[styles.p14]: fontSize === 14},
            {[styles.p18]: fontSize === 18},
            )}>
            {children}
        </p>
    );
};

export default PTag;