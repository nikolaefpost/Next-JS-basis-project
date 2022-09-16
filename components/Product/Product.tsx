import React, {FC, useState} from 'react';
import {ProductProps} from "./product.props";
import cn from "classnames";
import Image from 'next/image';
import styles from "./product.module.scss";
import Card from '../Card/Card';
import {Button, Rating, Review, Tag} from "../index";
import {declOdNumber, priceRu} from "../../helpers";

const Product: FC<ProductProps> = ({product, className, ...props}) => {

    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

    const onHandleClick = (): void =>{
        setIsReviewOpened(prev => !prev);
    };
    return (
        <>
            <Card cardColor="white" className={cn(className, styles.product)} {...props}>
                <div className={styles.logo}><Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} width={70}
                                                    height={70} alt={product.title}/></div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>{priceRu(product.credit)}/<span>мес</span></div>
                <div className={styles.rate}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
                <div className={styles.tags}>{product.categories.map(item => (
                    <Tag key={item} color="ghost">{item}</Tag>
                ))}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>в кредит</div>
                <div
                    className={styles.rateTitle}>{product.reviewCount} {declOdNumber(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}</div>
                <hr className={styles.hr}/>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(item => (
                        <div className={styles.characteristics} key={item.name}>
                            <span>{item.name}</span>
                            <span className={styles.line}/>
                            <span>{item.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.adv_block}>
                    {product.advantages && <div className={styles.advantages}>
                        <div>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <hr className={styles.hr2}/>
                <div className={styles.actions}>
                    <Button appearance="primary" >Узнать подробнее</Button>
                    <Button
                        appearance="ghost" arrow
                        onClick={onHandleClick}
                        direction={isReviewOpened? "down": "right"}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <Card
                cardColor="blue"
                className={cn(className, styles.review,
                    {[styles.is_open]: isReviewOpened})}
                {...props}
            >
                {product.reviews.map(item=>(
                    <Review key={item._id} review={item}/>
                ))}
            </Card>
        </>
    );
};

export default Product;