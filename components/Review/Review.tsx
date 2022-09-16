import React, {FC} from 'react';
import {ReviewProps} from "./Review.props";
import cn from "classnames";
import UserIcon from "./userIcon.svg";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import {Rating} from "../index";


import styles from "./Review.module.scss";

const Review: FC<ReviewProps> = ({ review, className,...props}) => {
    const { rating, createdAt, title, description, name} = review;
    return (
        <div
            className={cn(styles.review, className)}
            {...props}
        >
                <div className={styles.title}>
                    <div>
                        <UserIcon/>
                        <span>{name}:</span>
                    </div>

                    <span>{title}</span>
                </div>
            <div className={styles.date}>{format(new Date(createdAt), "dd MMMM yyyy", {locale: ru})}</div>
            <Rating rating={rating} className={styles.rate}/>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default Review;