import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src='logo.jpeg' alt='logo' className={styles.logo}></img>
        </div>
        <div className={styles.navList} >
          <button className={styles.loginButton}>LOG IN</button>
          <button className={styles.signupButton}>SIGN UP</button>
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.contentBox}>
          <div className={styles.heading}>A single platform that replaces multi-solution chaos and integrates hospital management with patient healthcare!</div>
          <div className={styles.buttonContainer}>
            <button className={styles.departmentButton}>View Departments</button>
            <button className={styles.appointmentButton}>Make an Appointment</button>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
