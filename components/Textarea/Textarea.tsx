import React, {FC} from 'react';
import {TextareaProps} from "./textarea.props";
import cn from "classnames";
import styles from "./textarea.module.scss";

const Textarea: FC<TextareaProps> = ({placeholder, className, ...props}) => {
    return (
        <textarea placeholder={placeholder}  className={cn(className, styles.input)} {...props} />
    );
};

export default Textarea;