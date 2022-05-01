import {AdvantagesProps} from "./Advantages.props";
import styles from "./Advantages.module.css";
import AdvantageIcon from './Advantage.svg';

export const Advantages = ({ advantages}: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.advantage}>
					<AdvantageIcon/>
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.vline}/>
					<div className={styles.description}>{a.description}</div>
				</div>
			))}
			
		</>
	)
}