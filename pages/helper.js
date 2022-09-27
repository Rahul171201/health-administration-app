import styles from '../styles/Patient.module.css';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';

export default function helper() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.profileBox}>
                <Profile type="helper"></Profile>
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar type="helper"></Sidebar>
            </div>
        </div>
    )
}
