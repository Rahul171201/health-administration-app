import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sideBar}>
        <div className={styles.loginBox}>
            <img src="logo.jpeg" alt="logo" className={styles.logo}></img>
        </div>
        <ul className={styles.sidebarList}>
            <li className={styles.listItem}>Profile</li>
            <li className={styles.listItem}>Lab and Radiology</li>
            <li className={styles.listItem}>Book Appointment</li>
            <li className={styles.listItem}>Admission</li>
            <li className={styles.listItem}>Payment</li>
        </ul>
    </div>
  )
}
