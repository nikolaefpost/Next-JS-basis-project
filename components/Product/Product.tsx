import React, {FC} from 'react';
import {ProductProps} from "./product.props";
import cn from "classnames";

import styles from "./product.module.scss";
import Card from '../Card/Card';
import {Button, Rating, Tag} from "../index";
import {declOdNumber, priceRu} from "../../helpers";

const Product: FC<ProductProps> = ({product,className, ...props}) => {
    return (
        <Card color="white" className={cn(className, styles.product)} {...props}>
            <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>{priceRu(product.credit)}/<span>мес</span></div>
            <div className={styles.rate}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            <div className={styles.tags}>{product.categories.map(item=>(
                <Tag key={item} color="ghost">{item}</Tag>
            ))}</div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>в кредит</div>
            <div className={styles.rateTitle}>{product.reviewCount} {declOdNumber(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}</div>
            <hr/>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
                {product.characteristics.map(item=>(
                    <div className={styles.characteristics} key={item.name}>
                        <div>{item.name}</div>
                        <div className={styles.line}/>
                        <div>{item.value}</div>
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
            <hr/>
            <div className={styles.actions}>
                <Button appearance="primary">Узнать подробнее</Button>
                <Button appearance="ghost" arrow>Читать отзывы</Button>
            </div>
        </Card>
    );
};

export default Product;