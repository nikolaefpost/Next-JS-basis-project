import React, {FC} from 'react';
import {PTagProps} from "./PTag.props";
import cn from "classnames";

import styles from "./PTag.module.scss"
import classNames from "classnames";

const PTag: FC<PTagProps> = ({className, children, fontSize= 16, ...props}) => {
    // switch (fontSize){
    //     case 16:
    //         return <p {...props} className={classNames(styles.content, className)}>{children}</p>;
    //     case 14:
    //         return <p {...props} className={classNames(styles.p14, className)}>{children}</p>;
    //     case 18:
    //         return <p {...props} className={classNames(styles.p18, className)}>{children}</p>;
    //     default:
    //         return <></>;
    // }
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