import styles from '../styles/Notification.module.css';
import { IoIosNotifications } from 'react-icons/io';


export default function Notification() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.listItem}>
            <div className={styles.headbar}>
                <h2>Heading</h2>
                <IoIosNotifications></IoIosNotifications>
            </div>
            <hr></hr>
            <div className={styles.description}></div>
        </div>
    </div>
  )
}
