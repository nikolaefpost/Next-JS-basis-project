import React, {forwardRef, useEffect, useState, KeyboardEvent, ForwardedRef, useRef} from 'react';
import Star from "./star.svg";
import cn from "classnames";
import {RatingProps} from "./Rating.props";

import styles from "./Rating.module.scss";


const Rating = forwardRef(({
                               rating,
                               isEditable = false,
                               setRating,
                               error,
                               className,
                               ...props
                           }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>(null)
    const constructRating = (currentRating: number): void => {
        const updateArray = ratingArray.map((r, index) => {
            return (
                <span
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onHandleClick(index + 1)}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={handleKey}
                    ref={r => ratingArrayRef.current?.push(r)}
                >
                   <Star
                       className={cn(styles.star, {
                               [styles.filled]: index < currentRating,
                               [styles.isEditable]: isEditable
                           }
                       )}


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

    const handleKey = (e: KeyboardEvent<HTMLSpanElement>) => {


        if (isEditable && setRating) {
            if (e.code === "ArrowRight" || e.code === "ArrowUp") {

                if (!rating && setRating) setRating(1);
                else {
                    e.preventDefault();
                    setRating((rating < 5 ? rating + 1 : 5));
                }
            }

            if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
                if (!rating && setRating) setRating(0);
                else {
                    e.preventDefault();
                    setRating((rating > 0 ? rating - 1 : 0));
                }

            }
        }
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    return (
        <div className={cn(className, styles.wrapper)}>
            <div {...props} className={cn(styles.rating, {
                [styles.red_stars]: error
            })} ref={ref}>
                {ratingArray.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
            {error && <span className={styles.message}>{error.message}</span>}
        </div>

    );
});

export default Rating;