import React, {FC} from 'react';
import {ButtonProps} from './Button.props';
import cn from "classnames";
import ArrowIcon from "./arrow.svg";
import styles from "./Button.module.scss";


const Button: FC<ButtonProps> = (
    {
        children,
        appearance,
        className,
        arrow,
        direction = "right",
        ...props
    }
) => {
    return (
        <button
            {...props}
            className={cn(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost"
            })}>
            {children}
            {arrow && <span className={cn(styles.arrow,
                {[styles.right]: direction === "right"},
                {[styles.down]: direction === "down"},

            )}>
                <ArrowIcon />
            </span>}
        </button>
    );
};

export default Button;