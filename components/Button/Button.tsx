import React, {FC} from 'react';
import {ButtonProps} from './Button.props';
import cn from "classnames";
import ArrowIcon from "./arrow.svg";
import {motion} from "framer-motion";
import styles from "./Button.module.scss";


const Button: FC<ButtonProps> = (
    {
        children,
        appearance,
        className,
        arrow,
        direction = "right",
        tabIndex,
        ...props
    }
) => {
    return (
        <motion.button
            tabIndex={tabIndex}
            whileHover={{scale: 1.1}}
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
        </motion.button>
    );
};

export default Button;