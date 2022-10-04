import styles from '../../styles/PatientRecord.module.css';
import Sidebar from '../../components/Sidebar';
import patientRecords from '../../components/Dummy_Patients';

export default function patient_record() {

    const listItems = patientRecords.map((item) => {
        const style = 'status' + item.status;
        return (
            <div className={styles.listItem} id={styles[style]}>
                <div className={styles.topBar}>
                    <img src={item.profilePic} alt="profile_pic" className={styles.profilePic}></img>
                    <div className={styles.infoBar}>
                        <h3>{item.name}</h3>
                        <h5>Appointment Date : {item.appointment_date}</h5>
                    </div>
                </div>
                <hr className={styles.horizontalRule}></hr>
                <div className={styles.detailBox}>
                    <div className={styles.description}>
                        {item.description}
                    </div>
                    <div className={styles.date}>Status : {item.status === 0 ? "To be checked" : (item.status === 1 ? "Checked" : "Appointment Cancelled")}</div>
                </div>
            </div>
        )
    })

    const rowItem = [];
    for (let i = 0; i < listItems.length; i = i + 2) {
        let element = '';
        if (i == listItems.length - 1) {
            const style = 'id' + i.toString();
            element = (
                <div className={`${styles.row} ${styles.lastRow}`} id={styles[style]}>
                    {listItems[i]}
                </div>);
        }
        else {
            const style = 'id' + i.toString();
            element = (
                <div className={`${styles.row}`} id={styles[style]}>
                    {listItems[i]}
                    {listItems[i + 1]}
                </div>);
        }
        rowItem.push(element);
    }

    return (
        <div className={styles.mainBox}>
            <div className={styles.recordBox}>
                {rowItem.map((item) => {
                    return (item);
                })}
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar type="doctor"></Sidebar>
            </div>
        </div>
    )
}
