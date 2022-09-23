import styles from '../styles/Login.module.css';

export default function login() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div>Login</div>
                <form method='post'>
                    <div className={styles.inputBox}>
                        <label for='email'><b>Email</b></label>
                        <input type="email" placeholder='Enter your email address' name='email'></input>
                    </div>
                </form>
            </div>
        </div>
    )
}
