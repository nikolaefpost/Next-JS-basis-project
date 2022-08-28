import React, {FC} from 'react';
import { HTagProps } from './HTag.props';
import classNames from "classnames";

import styles from "./HTag.module.scss";

const HTag: FC<HTagProps > = ({tag, children, className, ...props}) => {

    switch (tag){
        case "h1":
            return <h1 {...props} className={classNames(styles.h1, className)}>{children}</h1>;
        case "h2":
            return <h2 {...props} className={classNames(styles.h2, className)}>{children}</h2>;
        case "h3":
            return <h3 {...props} className={classNames(styles.h3, className)}>{children}</h3>;
        default:
            return <></>;
    }
};

export default HTag;