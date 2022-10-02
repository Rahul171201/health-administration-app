import styles from '../styles/Lab.module.css';
import LabItem from './LabItem';

export default function Lab() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.topContainer1}>
                    Lab and Radiology
                </div>
                <div className={styles.topContainer2}>
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <LabItem img="/xray.jpg" lab="X-RAY Lab" doctor="Dr.Vivek Oberoi" helper="Neha Jahangir" date="02/11/2022"></LabItem>
                <LabItem img="/radiology.webp" lab="Radiology Lab" doctor="Dr.Sukhdev Mohapatra" helper="Parital Desai" date="07/11/2022"></LabItem>
                <LabItem img="/pathology.jpg" lab="Pathology Lab" doctor="Dr.Mahipal Lomror" helper="Surya Bhanushali Pradhan" date="11/11/2022"></LabItem>
                <LabItem img="/xray.jpg" lab="X-RAY Lab" doctor="Dr.Vivek Oberoi" helper="Neha Jahangir" date="19/11/2022"></LabItem>
                <LabItem img="/pathology.jpg" lab="Pathology Lab" doctor="Dr.Pinky Pradhan" helper="Rohan Joshi" date="02/12/2022"></LabItem>
                <LabItem img="/xray.jpg" lab="X-RAY Lab" doctor="Dr.Vivek Oberoi" helper="Neha Jahangir" date="02/11/2022"></LabItem>
            </div>
        </div>
    )
}
