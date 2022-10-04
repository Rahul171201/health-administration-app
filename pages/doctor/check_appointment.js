import styles from '../../styles/CheckAppointment.module.css';
import Sidebar from '../../components/Sidebar';
import patientRecords from '../../components/Dummy_Patients';

export default function check_appointment() {

    const listItems = patientRecords.map((item) => {
        return (
            <div className={styles.listItem}>
                <div className={styles.topBar}>
                    <img src={item.profilePic} alt="profile_pic" className={styles.profilePic}></img>
                    <h3>{item.name}</h3>
                </div>
                <hr className={styles.horizontalRule}></hr>
                <div className={styles.detailBox}>
                    <div className={styles.description}>
                        {item.description}
                    </div>
                    <div className={styles.date}>Date : {item.appointment_date}</div>
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
            <div className={styles.appointmentBox}>
                {
                    rowItem.map(item => {
                        return (item);
                    })
                }
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar type="doctor"></Sidebar>
            </div>
        </div>
    )
}
