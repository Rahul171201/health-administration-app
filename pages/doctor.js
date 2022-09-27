import styles from '../styles/Patient.module.css';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';

export default function doctor() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.profileBox}>
                <Profile></Profile>
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}
