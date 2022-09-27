import styles from '../styles/Patient.module.css';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';

export default function patient() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.profileBox}>
                <Profile type="patient"></Profile>
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar type="patient"></Sidebar>
            </div>
        </div>
    )
}
