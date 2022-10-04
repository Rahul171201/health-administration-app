import styles from '../../styles/CheckAppointment.module.css';
import Sidebar from '../../components/Sidebar';

export default function check_appointment() {
  return (
    <div className={styles.mainBox}>
    <div className={styles.appointmentBox}>
        <div className={styles.row}>
            <div className={styles.listItem}>
                A peek
            </div>
            <div className={styles.listItem}>
                face around her
            </div>
        </div>
    </div>
    <div className={styles.sidebarBox}>
        <Sidebar type="doctor"></Sidebar>
    </div>
</div>
  )
}
