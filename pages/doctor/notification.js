import styles from '../../styles/Notification.module.css';
import Sidebar from '../../components/Sidebar';
import Notification from '../../components/Notification';

export default function admission() {
  return (
    <div className={styles.mainBox}>
    <div className={styles.notificationBox}>
        <Notification></Notification>
    </div>
    <div className={styles.sidebarBox}>
        <Sidebar type="doctor"></Sidebar>
    </div>
</div>
  )
}
