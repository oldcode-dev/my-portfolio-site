import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MyImage from "../../assets/image.png";
import styles from "./AboutPage.module.css";
import Graduation from "../../assets/social_logo/graduation.png";
import Certification from "../../assets/social_logo/certification.png";
import TechnicalSupport from "../../assets/social_logo/technical_support.png";
import UserSupport from "../../assets/social_logo/user_support.png";
import Code from "../../assets/social_logo/code.png";
import ProblemSolving from "../../assets/social_logo/problem_solving.png";

function AboutPage() {
    return (
        <>
            <Header />
            <main className={styles.aboutMain}>
                <h1 className={styles.heading}>About Me</h1>
                <div className={styles.underLine}></div>
                <section className={styles.profileSection}>
                    <img
                        src={MyImage}
                        alt="Ernest Opoku Frimpong"
                        className={styles.profileImage}
                    />
                    <div>
                        <h2 className={styles.name}>Ernest Opoku Frimpong</h2>
                        <p className={styles.title}>Frontend Engineer & IT Support Specialist</p>
                    </div>
                </section>

                <section className={styles.journeySection}>
                    <h3>My Journey</h3>
                    <p>
                        My passion for technology began during my early years and has evolved into a professional pursuit in IT support and frontend engineering. With a strong foundation in problem-solving and technical skills, I'm ready to contribute to innovative projects and teams.
                    </p>

                    <div className={styles.featureItem}>
                        <img src={Certification} alt="Certification" className={styles.featureIcon} />
                        <p >Google IT Support Certified</p>
                    </div>

                    <div className={styles.featureItem}>
                        <img src={Graduation} alt="Code" className={styles.featureIcon} />
                        <p>BSc Computer Science, UENR</p>
                    </div>
                </section>



                <section className={styles.skillsSection}>
                    <h3>What I Bring</h3>
                    <ul className={styles.skillsList}>
                        <li>
                            <img src={TechnicalSupport} alt="" />
                            <p>Technical Troubleshooting</p>
                        </li>

                        <li>
                            <img src={Code} alt="" />
                            <p>Frontend Development</p>
                        </li>
                        <li>
                            <img src={UserSupport} alt="" />
                            <p>User Support</p>
                        </li>
                        <li>
                            <img src={ProblemSolving} alt="" />
                            <p>Problem Solving</p>
                        </li>

                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;