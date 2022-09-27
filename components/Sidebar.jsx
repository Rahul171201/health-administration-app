import styles from '../styles/Sidebar.module.css';

export default function Sidebar(props) {

  if (props.type === "patient") {
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
  else if (props.type === "doctor") {
    return (
      <div className={styles.sideBar}>
        <div className={styles.loginBox}>
          <img src="logo.jpeg" alt="logo" className={styles.logo}></img>
        </div>
        <ul className={styles.sidebarList}>
          <li className={styles.listItem}>Profile</li>
          <li className={styles.listItem}>Lab and Radiology</li>
          <li className={styles.listItem}>Check Appointments</li>
          <li className={styles.listItem}>Patients Record</li>
        </ul>
      </div>
    )
  }
  else if (props.type === "helper") {
    return (
      <div className={styles.sideBar}>
        <div className={styles.loginBox}>
          <img src="logo.jpeg" alt="logo" className={styles.logo}></img>
        </div>
        <ul className={styles.sidebarList}>
          <li className={styles.listItem}>Profile</li>
          <li className={styles.listItem}>Lab and Radiology</li>
          <li className={styles.listItem}>Check Allotment</li>
        </ul>
      </div>
    )
  }
  else {
    return <div>404</div>
  }

}
