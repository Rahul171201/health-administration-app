import styles from '../../styles/CheckAllotment.module.css';
import Sidebar from '../../components/Sidebar';

export default function check_allotment() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.checkBox}>
                <div className={styles.listItem}>
                    check CheckAllotment
                </div>
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar type="helper"></Sidebar>
            </div>
        </div>
    )
}
