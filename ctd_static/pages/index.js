import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CTDLOGO from "../images/CTD_Logo1.svg";
import CTDStepper from "../images/CTDStepper.svg";
import CTDHand from "../images/CTDHand.svg";
import CTDMOBILEHAND from "../images/CTDHANDMOBILE.svg";
import Butterfly from "../images/Butterfly.svg";
import GoalImage from "../images/GoalsLap.svg";
import MobilGoals1 from "../images/IMG1.svg";
import MobileGoal2 from "../images/IMG2.svg";
import MobileGoal3 from "../images/IMG3.svg";
import MobileImage from "../images/Footer/PhoneImage.svg";
import MailImage from "../images/Footer/MailImage.svg";
import LocationImage from "../images/Footer/Location.svg";

export default function Home() {
  return (
    <>
      <div className={styles.header}></div>
      <div className={styles.container}>
        <div className={styles.logo_image}>
          <Image src={CTDLOGO} layout="fill" />
        </div>
        <div>
          <div className={styles.headerTitle}>
            Lets’ achieve <span style={{ color: "#45BF04" }}>Net Zero </span>
            2050 goal together
          </div>
        </div>
        <div className={styles.stepper}>
          <Image src={CTDStepper} layout="fill" />
        </div>

        <div className={styles.hand_div}>
          <div className={styles.handImage}>
            <Image src={CTDHand} layout="fill" />
          </div>
          <div className={styles.hand_mobileimage}>
            <Image src={CTDMOBILEHAND} layout="fill" />
          </div>
        </div>
        <div className={styles.goals_container}>
          <div className={styles.butterfly_container}>
            <Image src={Butterfly} layout="fill" />
          </div>
          <div className={styles.goals_tittle}>Sustainablity goals</div>
        </div>
        <div>
          <div className={styles.goal_image}>
            <Image src={GoalImage} layout="fill" alt="Picture of the golas" />
          </div>
          <div className={styles.goal_mobileimage}>
            <div className={styles.goals_imagecontainer}>
              <Image src={MobilGoals1} layout="fill" />
            </div>
            <div className={styles.goals_imagecontainer2}>
              <Image src={MobileGoal2} layout="fill" />
            </div>
            <div className={styles.goals_imagecontainer3}>
              <Image src={MobileGoal3} layout="fill" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.phone}>
          <div className={styles.footericon}>
            <Image src={MobileImage} layout="fill" />
          </div>
          <div className={styles.icontext}>+91-8095597309</div>
        </div>
        <div className={styles.phone}>
          <div className={styles.footericon}>
            <Image src={MailImage} layout="fill" />
          </div>
          <div className={styles.icontext}>info@zerocarbons.life</div>
        </div>
        <div className={styles.phone}>
          <div className={styles.footericon}>
            <Image src={LocationImage} layout="fill" />
          </div>
          <div className={styles.icontext}>
            No 1538, 14th Main KS Layout , Bangalore - 560078
          </div>
        </div>
      </div>
    </>
  );
}
