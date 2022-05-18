import {ReviewFormProps} from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from 'classnames';
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";


export const ReviewForm = ({ productId, className, ...props}: ReviewFormProps): JSX.Element => {
	const {register, control, handleSubmit } = useForm<IReviewForm>();

	const onSubmit = (data:IReviewForm) => {

	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input {...register("name")} placeholder="Имя"/>
				<Input {...register("title")} className={styles.inputTitle} placeholder="Заголовок отзыва"/>
				<div className={styles.rate}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						render={({field}) => (
							<Rating isEditable rating={field.value} setRating={field.onChange}/>
						)}
					/>
					
				</div>
				<Textarea {...register("description")} className={styles.description} placeholder="Текст отзыва"/>
				<div className={styles.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={styles.info}> * Перед публикацией отзыв пройдет модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, Ваш отзыв будет опубликован после проверки.</div>
				<CloseIcon className={styles.close}/>
			</div>
			
		</form>
	);
};