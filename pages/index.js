import styles from '../styles/Home.module.css';
import { BsFillHeartFill } from 'react-icons/bs';
import { TbEmergencyBed } from 'react-icons/tb';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {

  const primary_care = 'Primary care is the day-to-day healthcare given by a health care provider. Typically this provider acts as the first contact and principal point of continuing care for patients within a healthcare system, and coordinates other specialist care that the patient may need. Patients commonly receive primary care from professionals such as a primary care physician (general practitioner or family physician), a physician assistant, or a nurse practitioner.';
  const emergency = 'Ensuring access to health services in humanitarian and emergency settings requires strong coordination among governments and partners. It also requires sustainable funding, strategic planning, and capacity-building on the ground.';
  const online_appointment = 'You can register and get an appointment online for the government hospitals. Users can get an OPD appointment, lab reports and check blood availability in any government hospital online. Mobile app is also available for users to get an appointment for the government hospitals. The dashboard is given for information about the hospitals registered with the portal, total appointments, government departments, etc.';

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src='logo.jpeg' alt='logo' className={styles.logo}></img>
        </div>
        <div className={styles.navList} >
          <Link href="/login">
            <a>
              <button className={styles.loginButton}>
                LOG IN
              </button>
            </a>
          </Link>

          <Link href="/register">
            <a>
              <button className={styles.signupButton}>
                SIGN UP
              </button>
            </a>
          </Link>
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
      <div className={styles.bottomContainer}>
        <div className={styles.bottomItem}>
          <div className={styles.headBar}>
            <BsFillHeartFill className={styles.icon}></BsFillHeartFill>
            Primary Care
          </div>
          <hr className={styles.horizontalLine}></hr>
          <div className={styles.description}>
            {primary_care}
          </div>
        </div>

        <div className={styles.bottomItem}>
          <div className={styles.headBar}>
            <TbEmergencyBed className={styles.icon}></TbEmergencyBed>
            Emergency
          </div>
          <hr className={styles.horizontalLine}></hr>
          <div className={styles.description}>
            {emergency}
          </div>
        </div>

        <div className={styles.bottomItem}>
          <div className={styles.headBar}>
            <BsFillPersonLinesFill className={styles.icon}></BsFillPersonLinesFill>
            Online Appointment
          </div>
          <hr className={styles.horizontalLine}></hr>
          <div className={styles.description}>
            {online_appointment}
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        Copyright 2022 @Rahul Roy
      </footer>
    </div>
  )
}
