import React, {FC, useState} from 'react';
import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import CloseIcon from "./cross.svg";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {Button, Input, Rating, Textarea} from "../index";
import {IReviewForm, IReviewSendResponse} from "./ReviewForm.interface";
import axios, {AxiosError} from "axios";
import styles from "./ReviewForm.module.scss";
import {API} from "../../helpers/api";


const ReviewForm: FC<ReviewFormProps> = ({productId, className, ...props}) => {
    const {
        register,
        control,
        handleSubmit,
        formState: {
            errors,

        },
        reset
    } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onHandleSubmit: SubmitHandler<IReviewForm> = async (formData) => {
        try{
            const {data} = await axios.post<IReviewSendResponse>(API.review.createDemo, {...formData,  productId});
            if (data.message) {
                setIsSuccess(true);
                reset();
                // setTimeout(()=>setIsSuccess(false), 3000);
            } else {
                setError("Wrong data");
            }
        } catch(err) {
            const error = err as Error | AxiosError;
            // if(!axios.isAxiosError(error)){
            //     // do whatever you want with native error
            // }
            // // do what you want with your axios error
            setError(error.message)
        }

    };
    return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div
                className={cn(styles.review_form, className)}
                {...props}
            >
                <Input
                    placeholder="Имя"
                    error={errors.name}
                    {...register("name", {required: {value: true, message: "имя не заполнено"}})}
                />
                <Input
                    placeholder="Заголовок отзыва"
                    error={errors.title}
                    {...register("title", {required: {value: true, message: "введите заголовок"}})}
                />
                <div className={cn(styles.rate, {[styles.rate_error]:errors.rating})}>
                    <span>Оценка:</span>
                    <Controller
                        name="rating"
                        control={control}
                        rules={{ required: "введите рейтинг" }}
                        render={({field})=><Rating ref={field.ref} error={errors.rating}  rating={field.value} setRating={field.onChange} isEditable/>}
                    />

                </div>
                <Textarea
                    className={styles.textarea}
                    placeholder="Текст отзыва"
                    error={errors.description}
                    {...register("description", {required: {value: true, message: "введите описание"}})}
                />
                <div className={styles.button_block}>
                    <Button appearance="primary" type="submit">Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>

            </div>
            {isSuccess && <div className={styles.success}>
                <h3>Ваш отзыв отправлен</h3>
                <p>Спасибо за отзыв. Перед публикацией отзыв пройдет предварительную модерацию и проверку.</p>
                <CloseIcon onClick={()=>setIsSuccess(false)} />
            </div>}
            {error && <div className={styles.error}>
                <h3>Ваш отзыв не отправлен</h3>
                <p>{error}</p>
                <CloseIcon onClick={()=>setError("")} />
            </div>}
        </form>
    );
};

export default ReviewForm;