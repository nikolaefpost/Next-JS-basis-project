import React, {FC} from 'react';
import {InputProps} from "./input.props";
import cn from "classnames";
import styles from "./input.module.scss";

const Input: FC<InputProps> = ({placeholder, className, ...props}) => {
    return (
        <input placeholder={placeholder}  className={cn(className, styles.input)} {...props} />
    );
};

export default Input;