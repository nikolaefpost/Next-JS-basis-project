import React, {FC, useState} from 'react';
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

    const [isOpen, setIsOpen] =useState<string >(direction);
    const onHandleClick = (): void =>{
        setIsOpen(prev => {
            return prev === "right" ? "down" : "right"
        })
    }
    return (
        <button
            onClick={onHandleClick}
            {...props}
            className={cn(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost"
            })}>
            {children}
            {arrow && <span className={cn(styles.arrow,
                {[styles.right]: isOpen === "right"},
                {[styles.down]: isOpen === "down"},

            )}>
                <ArrowIcon />
            </span>}
        </button>
    );
};

export default Button;