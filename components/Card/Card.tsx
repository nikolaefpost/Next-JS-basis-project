import React, { ForwardedRef, forwardRef} from 'react';
import {CardProps} from "./Card.props";
import cn from "classnames";


import styles from "./Card.module.scss";


const Card = forwardRef(({className, children, cardColor,  ...props}: CardProps, ref:ForwardedRef<HTMLDivElement> ) :JSX.Element => {

    return (
        <div
            className={cn(styles.card, className, {
            [styles.blue]: cardColor === "blue"
        })}
            ref={ref}
            {...props}
        >
            {children}
        </div>
    );
});

export default Card;