import React, {FC} from 'react';
import {ButtonProps} from './Button.props';
import classNames from "classnames";
import styles from "./Button.module.scss";


const Button: FC<ButtonProps> = ({children, appearance, className, ...props}) => {
    return (
        <button
            {...props}
            className={classNames(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost"
            })}>
            {children}
        </button>
    );
};

export default Button;