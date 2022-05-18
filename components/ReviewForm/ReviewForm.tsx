import {ReviewFormProps} from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from 'classnames';
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import CloseIcon from "./close.svg";


export const ReviewForm = ({ productId, className, ...props}: ReviewFormProps): JSX.Element => {
	return (
		<>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input placeholder="Имя"/>
				<Input className={styles.inputTitle} placeholder="Заголовок отзыва"/>
				<div className={styles.rate}>
					<span>Оценка:</span>
					<Rating className={styles.rating} isEditable rating={0}/>
				</div>
				<Textarea className={styles.textarea} placeholder="Текст отзыва"/>
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
			
		</>
	);
};