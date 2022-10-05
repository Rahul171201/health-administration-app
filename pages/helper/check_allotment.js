import styles from '../../styles/CheckAllotment.module.css';
import Sidebar from '../../components/Sidebar';

export default function check_allotment() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.checkBox}>
                <h1 className={styles.text}>You have no recent allotments</h1>
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar type="helper"></Sidebar>
            </div>
        </div>
    )
}
