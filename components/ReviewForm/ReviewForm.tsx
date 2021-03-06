import {ReviewFormProps} from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from 'classnames';
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";


export const ReviewForm = ({ productId, isOpened, className, ...props}: ReviewFormProps): JSX.Element => {
	const {register, control, handleSubmit, formState: {errors}, reset } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
			if (data.message) {
				setIsSuccess(true);
				reset();
			}	else {
				setError('Что-то пошло не так');
			}
		} catch (e: any) {
			setError(e.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input 
					{...register("name", {required: {value: true, message: 'Введите имя'}})}
					error={errors.name}
					placeholder="Имя"
					tabIndex={isOpened ? 0 : -1}
				/>
				<Input {...register("title", {required: {value: true, message: 'Введите заголовок'}})}
					error={errors.title}
					className={styles.inputTitle} 
					placeholder="Заголовок отзыва"
					tabIndex={isOpened ? 0 : -1}
				/>
				<div className={styles.rate}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{required: {value: true, message: 'Укажите рейтинг'}}}
						render={({field}) => (
							<Rating 
								isEditable 
								rating={field.value} 
								setRating={field.onChange}
								ref={field.ref}
								error={errors.rating}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
					
				</div>
				<Textarea 
					{...register("description", {required: {value: true, message: 'Введите отзыв'}})} 
					error={errors.description}
					className={styles.description} 
					placeholder="Текст отзыва"
					tabIndex={isOpened ? 0 : -1}
					/>
				<div className={styles.submit}>
					<Button appearance='primary' tabIndex={isOpened ? 0 : -1}>Отправить</Button>
					<span className={styles.info}> * Перед публикацией отзыв пройдет модерацию и проверку</span>
				</div>
			</div>
			{isSuccess && <div className={styles.success} role='alert'>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, Ваш отзыв будет опубликован после проверки.</div>
				<button 
					className={styles.close} 
					onClick={() => setIsSuccess(false)}
					aria-label='Закрыть оповещение'
				>
				<CloseIcon/>
				</button >
			</div>}
			{error && <div className={styles.error} role='alert'>
						Что-то пошло не так, попробуйте обновить страницу
				<button 
					className={styles.close} 
					onClick={() => setError(undefined)}
					aria-label='Закрыть оповещение'
				>
					<CloseIcon />
				</button>
			</div>}
		</form>
	);
};