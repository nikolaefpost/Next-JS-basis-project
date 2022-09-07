import React, {FC} from 'react';
import {CardProps} from "./Card.props";
import cn from "classnames";


import styles from "./Card.module.scss"


const Card: FC<CardProps> = ({className, children, color,  ...props}) => {

    return (
        <div
            className={cn(styles.card, className, {
            [styles.blue]: color === "blue"
        })}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;