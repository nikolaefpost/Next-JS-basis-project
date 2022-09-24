import React, {forwardRef, useEffect, useState, KeyboardEvent, ForwardedRef} from 'react';
import Star from "./star.svg";
import cn from "classnames";
import {RatingProps} from "./Rating.props";

import styles from "./Rating.module.scss";


const Rating = forwardRef(({rating, isEditable = false, setRating, className, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const constructRating = (currentRating: number): void => {
        const updateArray = ratingArray.map((r, index) => {
            return (
                <span
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onHandleClick(index + 1)}
                >
                   <Star
                            className={cn(styles.star,
                                {
                            [styles.filled]: index < currentRating,
                            [styles.isEditable]: isEditable
                        }
                    )}

                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updateArray);
    };

    const changeDisplay = (i: number): void => {
        if (isEditable) constructRating(i);
    };

    const onHandleClick = (i: number): void => {
        if (setRating && isEditable) setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code === "Space" && setRating) setRating(i);
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    return (
        <div {...props} className={cn(className, styles.rating)} ref={ref}>
            {ratingArray.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </div>
    );
});

export default Rating;