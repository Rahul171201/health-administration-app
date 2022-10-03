import styles from '../styles/Notification.module.css';
import { IoIosNotifications } from 'react-icons/io';


export default function Notification() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.listItem}>
            <div className={styles.headbar}>
                <h2>Dr.Oberoi on leave</h2>
                <IoIosNotifications className={styles.notificationIcon}></IoIosNotifications>
            </div>
            <hr className={styles.horizontalRule}></hr>
            <div className={styles.description}>
              Dr.Vivek Oberoi is on a leave. Please book an appointment with some other doctor as soon as possible!
              Do not sit back and wait for the problem to go on its own!
            </div>
        </div>

        <div className={styles.listItem}>
            <div className={styles.headbar}>
                <h2>Dr.Oberoi on leave</h2>
                <IoIosNotifications className={styles.notificationIcon}></IoIosNotifications>
            </div>
            <hr className={styles.horizontalRule}></hr>
            <div className={styles.description}>
              Dr.Vivek Oberoi is on a leave. Please book an appointment with some other doctor as soon as possible!
            </div>
        </div>

        <div className={styles.listItem}>
            <div className={styles.headbar}>
                <h2>Dr.Oberoi on leave</h2>
                <IoIosNotifications className={styles.notificationIcon}></IoIosNotifications>
            </div>
            <hr className={styles.horizontalRule}></hr>
            <div className={styles.description}>
              Dr.Vivek Oberoi is on a leave. Please book an appointment with some other doctor as soon as possible!
            </div>
        </div>

        <div className={styles.listItem}>
            <div className={styles.headbar}>
                <h2>Dr.Oberoi on leave</h2>
                <IoIosNotifications className={styles.notificationIcon}></IoIosNotifications>
            </div>
            <hr className={styles.horizontalRule}></hr>
            <div className={styles.description}>
              Dr.Vivek Oberoi is on a leave. Please book an appointment with some other doctor as soon as possible!
            </div>
        </div>
    </div>
  )
}
