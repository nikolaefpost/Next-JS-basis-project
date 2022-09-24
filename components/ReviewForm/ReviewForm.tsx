import React, {FC} from 'react';
import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import CloseIcon from "./cross.svg";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {Button, Input, Rating, Textarea} from "../index";
import {IReviewForm} from "./ReviewForm.interface";
import styles from "./ReviewForm.module.scss";


const ReviewForm: FC<ReviewFormProps> = ({productId, className, ...props}) => {
    const {
        register,
        control,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<IReviewForm>();
    
    const onHandleSubmit: SubmitHandler<IReviewForm> = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div
                className={cn(styles.review_form, className)}
                {...props}
            >
                <Input
                    placeholder="Имя"
                    error={errors.userName}
                    {...register("userName", {required: {value: true, message: "имя не заполнено"}})}
                />
                <Input
                    placeholder="Заголовок отзыва"
                    error={errors.title}
                    {...register("title", {required: {value: true, message: "введите заголовок"}})}
                />
                <div className={styles.rate}>
                    <span>Оценка:</span>
                    <Controller
                        name="rating"
                        control={control}
                        render={({field})=><Rating ref={field.ref}  rating={field.value} setRating={field.onChange} isEditable/>}
                    />

                </div>
                <Textarea className={styles.textarea}  placeholder="Текст отзыва" error={errors.description} {...register("description")}/>
                <div className={styles.button_block}>
                    <Button appearance="primary" type="submit">Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>

            </div>
            <div className={styles.success}>
                <h3>Ваш отзыв отправлен</h3>
                <p>Спасибо за отзыв. Перед публикацией отзыв пройдет предварительную модерацию и проверку.</p>
                <CloseIcon/>
            </div>
        </form>
    );
};

export default ReviewForm;