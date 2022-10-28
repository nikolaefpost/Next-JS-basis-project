import React, {FC} from 'react';
import {ButtonIconProps, icons} from './ButtonIcon.props';
import cn from "classnames";

import styles from "./ButtonIcon.module.scss";


const ButtonIcon: FC<ButtonIconProps> = (
    {
        appearance,
        icon,
        className,
        ...props
    }
) => {

    const IconComp = icons[icon];
    return (
        <button
            name='icon_button'
            type='button'
            {...props}
            className={cn(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.white]: appearance === "white"
            })}>
            <IconComp/>

        </button>
    );
};

export default ButtonIcon;