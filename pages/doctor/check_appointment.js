import styles from '../../styles/CheckAppointment.module.css';
import Sidebar from '../../components/Sidebar';

export default function check_appointment() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.appointmentBox}>
                <div className={`${styles.row} ${styles.topRow}`}>
                    <div className={styles.listItem}>
                        <div className={styles.topBar}>
                            <img src="/rahul.jfif" alt="profile_pic" className={styles.profilePic}></img>
                            <h3>Rahul Roy</h3>
                        </div>
                        <hr className={styles.horizontalRule}></hr>
                        <div className={styles.detailBox}>
                            <div className={styles.description}>
                                The patient is suffering from high fever and reddish itches on the sides of the arms and thighs.
                                The problem is also associated with frequent sleep breaks.
                            </div>
                            <div className={styles.date}>Date : 02-11-2022</div>
                        </div>
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
