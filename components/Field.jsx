import styles from '../styles/Profile.module.css';

export default function Field(props) {
  return (
    <div className={styles.outerFieldBox}>
        <div className={styles.label}>{props.label}</div>
        <div className={styles.innerFieldBox}>
            {props.value}
        </div>
    </div>
  )
}
