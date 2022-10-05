import styles from '../styles/LoginAndRegister.module.css';
import { GoogleLogin } from 'react-google-login';
import Link from 'next/link';


export default function login() {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div className={styles.outerContainer}>

            <video autoPlay loop muted plays-inline className={styles.videoBackground}>
                <source src='video.mp4' type='video/mp4' />
            </video>

            <div className={styles.innerContainer}>
                <div className={styles.loginText}>Login</div>
                <form method='post' className={styles.formBox}>
                    <div className={styles.inputBox}>
                        <div className={styles.eachInput}>
                            <label for='email' className={styles.labelText}><b>Email</b></label>
                            <input type="email" placeholder='Enter your email address' name='email' className={styles.inputField}></input>
                        </div>
                        <div className={styles.eachInput}>
                            <label for='password' className={styles.labelText}><b>Password</b></label>
                            <input type="password" placeholder='Enter the password' name='password' className={styles.inputField}></input>
                        </div>
                        <div className={styles.forgotPasswordBox}>
                            <span><a href="#">Forgot password</a></span>
                        </div>
                    </div>
                </form>
                <div className={styles.bottomBox}>
                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <Link href="/register">
                        <a>
                            <button className={styles.signupButton}>Sign Up</button>
                        </a>
                    </Link>

                </div>
            </div>
        </div>
    )
}
