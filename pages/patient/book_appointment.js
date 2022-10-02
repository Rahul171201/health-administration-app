import styles from '../../styles/BookAppointment.module.css';
import Sidebar from '../../components/Sidebar';

export default function book_appointment() {
    return (
        <div className={styles.mainBox}>
            <div className={styles.baBox}>
                <div className={styles.formBox}>
                    <h2>Book Appointment</h2>
                    <hr className={styles.hrLine}/>
                    <form action="/patient" method="POST">
                        <div className={styles.upperBox}>
                            <div className={styles.formItem}>
                                <label className={styles.label}>Enter Full Name</label>
                                <input name="full_name" placeholder='Full Name' type="text" className={styles.inputBox1}></input>
                            </div>
                            <div className={styles.formItem}>
                                <label className={styles.label}>Enter Phone Number</label>
                                <input name="mobile" placeholder='Mobile Number' type="text" className={styles.inputBox1}></input>
                            </div>
                            <div className={styles.formItem}>
                                <label className={styles.label}>Enter your email address</label>
                                <input name="email" placeholder='Email Address' type="email" className={styles.inputBox1}></input>
                            </div>
                            <div className={styles.formItem}>
                                <label className={styles.label}>Enter Appointment date</label>
                                <input name="appointment_date" placeholder='Appointment Date' type="date" className={styles.inputBox1}></input>
                            </div>
                            <div className={styles.formItem2}>
                                <label className={styles.label}>Enter Address Details</label>
                                <div className={styles.addressBar}>
                                    <input name="area" placeholder='Area' type="text" className={styles.inputBox2}></input>
                                    <input name="city" placeholder='City' type="text" className={styles.inputBox2}></input>
                                </div>
                                <div className={styles.addressBar}>
                                    <input name="state" placeholder='State' type="text" className={styles.inputBox2}></input>
                                    <input name="postal_code" placeholder='Postal Code' type="text" className={styles.inputBox2}></input>
                                </div>
                            </div>
                            <button type='submit' className={styles.submitButton}>Book Appointment</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className={styles.sidebarBox}>
                <Sidebar type="patient"></Sidebar>
            </div>
        </div>
    )
}
