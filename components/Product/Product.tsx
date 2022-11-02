import React, { ForwardedRef, forwardRef, useRef, useState } from 'react'
import { ProductProps } from './product.props'
import cn from 'classnames'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Card from '../Card/Card'
import { Button, Rating, Review, ReviewForm, Tag } from '../index'
import { declOdNumber, priceRu } from '../../helpers'
import styles from './product.module.scss'

const Product = motion(
  forwardRef(
    (
      { product, className, ...props }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const variants = {
        visible: {
          opacity: 1,
          height: 'auto',
        },
        hidden: {
          opacity: 0,
          height: 0,
        },
      }
      const urlImage = (product.image.slice(0, 4) === "http")?
          product.image : process.env.NEXT_PUBLIC_DOMAIN + product.image
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false)
      const reviewRef = useRef<HTMLDivElement>(null)

      const onHandleClick = (): void => {
        setIsReviewOpened((prev) => !prev)
      }

      const scrollToReview = () => {
        reviewRef.current?.scrollIntoView({ block: 'end' })
        reviewRef.current?.focus()
        setTimeout(() => {
          setIsReviewOpened((prev) => !prev)
        }, 500)
      }
      return (
        <div className={className} {...props} ref={ref}>
          <Card cardColor="white" className={cn(styles.product)}>
            <div className={styles.logo}>
              {
                <Image
                  src={urlImage}
                  width={70}
                  height={70}
                  alt={product.title}
                />
              }
            </div>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.price}>
              {priceRu(product.price)}
              {product.oldPrice && (
                <Tag color="green">
                  {priceRu(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              {priceRu(product.credit)}/<span>мес</span>
            </div>
            <div className={styles.rate}>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((item) => (
                <Tag key={item} color="ghost">
                  {item}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>в кредит</div>
            <div className={styles.rateTitle}>
              <a onClick={scrollToReview}>
                {product.reviewCount}{' '}
                {declOdNumber(product.reviewCount, [
                  'отзыв',
                  'отзыва',
                  'отзывов',
                ])}
              </a>
            </div>
            <hr className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
              {product.characteristics.map((item) => (
                <div className={styles.characteristics} key={item.name}>
                  <span>{item.name}</span>
                  <span className={styles.line} />
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.adv_block}>
              {product.advantages && (
                <div className={styles.advantages}>
                  <div>Преимущества</div>
                  <div>{product.advantages}</div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div>Недостатки</div>
                  <div>{product.disadvantages}</div>
                </div>
              )}
            </div>
            <hr className={styles.hr2} />
            <div className={styles.actions}>
              <Button appearance="primary">Узнать подробнее</Button>
              <Button
                appearance="ghost"
                arrow
                onClick={onHandleClick}
                direction={isReviewOpened ? 'down' : 'right'}
              >
                Читать отзывы
              </Button>
            </div>
          </Card>
          <motion.div
            initial="hidden"
            animate={isReviewOpened ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={styles.wrapper_review}
          >
            <Card
              cardColor="blue"
              className={cn(className, styles.review)}
              ref={reviewRef}
              tabIndex={isReviewOpened ? 0 : -1}
            >
              {product.reviews.map((item) => (
                <Review key={item._id} review={item} />
              ))}
              <ReviewForm isOpened={isReviewOpened} productId={product._id} />
            </Card>
          </motion.div>
        </div>
      )
    }
  )
)

export default Product