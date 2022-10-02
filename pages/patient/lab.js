import styles from '../../styles/Lab.module.css';
import Sidebar from '../../components/Sidebar';
import Lab from '../../components/Lab';

export default function lab() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.labBox}>
                <Lab></Lab>
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar type="patient"></Sidebar>
            </div>
        </div>
    )
}
