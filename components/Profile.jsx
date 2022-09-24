import styles from '../styles/Profile.module.css';
import Field from './Field';

export default function Profile() {
    return (
        <div className={styles.mainBox}>
            <img src="rahul.jfif" alt="profile image" className={styles.profileImage} />
            <div className={styles.backgroundImageBox}>
                <img src="eren.jpg" alt="background image" className={styles.backgroundImage} />
            </div>
            <div className={styles.nameBox}>
                <div className={styles.nameBoxInner}>
                    <span className={styles.name}>Rahul Roy</span>
                    <span className={styles.designation}>Patient</span>
                </div>
            </div>
            <div className={styles.fieldBox}>
                <div className={styles.row}>
                    <Field label="Age" value="21"></Field>
                    <Field label="Date of Birth" value="17-12-2001"></Field>
                </div>
                <div className={styles.row}>
                    <Field label="Gender" value="Male"></Field>
                    <Field label="Nationality" value="Indian"></Field>
                </div>
                <div className={styles.row}>
                    <Field label="City" value="Bhubaneswar"></Field>
                    <Field label="State" value="Odisha"></Field>
                </div>
                <div className={styles.row}>
                    <Field label="Home Address" value="Qn-7, Block-1, Type-4, BSNL Colony, Vanivihar"></Field>
                    <Field label="Mobile" value="9337094734"></Field>
                </div>
            </div>

        </div>
    )
}
