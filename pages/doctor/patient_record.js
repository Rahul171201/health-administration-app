import styles from '../../styles/PatientRecord.module.css';
import Sidebar from '../../components/Sidebar';

export default function patient_record() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.recordBox}>
                <div className={`${styles.row} ${styles.topRow}`}>
                    <div className={styles.listItem}>
                        <div className={styles.topBar}>
                            <img src="/rahul.jfif" alt="profile_pic" className={styles.profilePic}></img>
                            <div className={styles.infoBar}>
                                <h3>Rahul Roy</h3>
                                <h5>Appointment Date : 02/11/2022</h5>
                            </div>
                        </div>
                        <hr className={styles.horizontalRule}></hr>
                        <div className={styles.detailBox}>
                            <div className={styles.description}>
                                The patient is suffering from high fever and reddish itches on the sides of the arms and thighs.
                                The problem is also associated with frequent sleep breaks.
                            </div>
                            <div className={styles.date}>Status : To be checked</div>
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
