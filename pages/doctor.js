import styles from '../styles/Patient.module.css';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';

export default function doctor() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.profileBox}>
                <Profile type="doctor"></Profile>
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar type="doctor"></Sidebar>
            </div>
        </div>
    )
}
