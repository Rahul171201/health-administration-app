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
            <Link href="/patient/Payment">
              <a>Payment</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/patient/notification">
              <a>Notifications</a>
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
          <li className={styles.listItem}>
            <Link href="/doctor/check_appointment">
              <a>Check Appointments</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/doctor/patient_record">
              <a>Patient Records</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/doctor/notification">
              <a>Notifications</a>
            </Link>
          </li>
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
          <li className={styles.listItem}>
            <Link href="/helper/check_allotment">
              <a>Check Allotment</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/helper/notification">
              <a>Notifications</a>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
  else {
    return <div>404</div>
  }

}
