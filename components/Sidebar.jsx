import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';

export default function Sidebar(props) {

  if (props.type === "patient") {
    return (
      <div className={styles.sideBar}>
        <div className={styles.loginBox}>
          <img src="/logo.jpeg" alt="logo" className={styles.logo}></img>
        </div>
        <ul className={styles.sidebarList}>
          <li className={styles.listItem}>
            <Link href="/patient">
              <a>Profile</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/patient/lab">
              <a>Lab and Radiology</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/patient/book_appointment">
              <a>Book Appointment</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/patient/notifications">
              <a>Admission</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/patient/Payment">
              <a>Payment</a>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
  else if (props.type === "doctor") {
    return (
      <div className={styles.sideBar}>
        <div className={styles.loginBox}>
          <img src="/logo.jpeg" alt="logo" className={styles.logo}></img>
        </div>
        <ul className={styles.sidebarList}>
          <li className={styles.listItem}>
            <Link href="/doctor">
              <a>Profile</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/doctor/lab">
              <a>Lab and Radiology</a>
            </Link>
          </li>
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
          <img src="/logo.jpeg" alt="logo" className={styles.logo}></img>
        </div>
        <ul className={styles.sidebarList}>
          <li className={styles.listItem}>
            <Link href="/helper">
              <a>Profile</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/helper/lab">
              <a>Lab and Radiology</a>
            </Link>
          </li>
          <li className={styles.listItem}>Check Allotment</li>
        </ul>
      </div>
    )
  }
  else {
    return <div>404</div>
  }

}
