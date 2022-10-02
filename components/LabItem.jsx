import styles from '../styles/Lab.module.css';

export default function LabItem(props) {
    return (
        <div className={styles.listItem}>
            <div className={styles.leftBox}>
                <img src={props.img} alt="img" className={styles.listImage}></img>
                <div>{props.lab}</div>
            </div>
            <div className={styles.rightBox}>
                <div>Assigned to <b>{props.doctor}</b></div>
                <div>Helper duty assigned to <b>{props.helper}</b></div>
                <h5>Date : {props.date}</h5>
            </div>
        </div>
    )
}
