import styles from '../../styles/Admission.module.css';
import Sidebar from '../../components/Sidebar';

export default function admission() {
  return (
    <div className={styles.mainBox}>
    <div className={styles.admissionBox}>
        admission
    </div>
    <div className={styles.sidebarBox}>
        <Sidebar type="patient"></Sidebar>
    </div>
</div>
  )
}
