import styles from "./HomePage.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Certification from "../../assets/social_logo/certification.png";
import Support from "../../assets/social_logo/support.png";
import Code from "../../assets/social_logo/code.png";
import Networking from "../../assets/social_logo/networking.png";
import Responsive from "../../assets/social_logo/responsive.png";
import Graduation from "../../assets/social_logo/graduation.png";
import HeroImage from "../../assets/image.png";
const HomePage = () => {
    return (
        <div className={styles.homepageContainer}>
            <Header />
            <section className={styles.heroContainer}>
                <div className={styles.heroImageContainer}>
                    <img src={HeroImage} alt="Hero" className={styles.heroImage} />
                </div>
                <h1 className={styles.heroTitle}>Opoku Frimpong Ernest</h1>
                <p className={styles.heroSubtitle}>IT Support Specialist & Frontend Engineer</p>
                <div className={styles.ctaButtonGroup}>
                    <button className={styles.primaryActionBtn}>Get Started</button>
                    <button className={styles.secondaryActionBtn}>Learn More</button>
                </div>
            </section>
            <section className={styles.aboutSection}>
                <h2 className={styles.sectionTitle}>Welcome</h2>
                <p className={styles.sectionDescription}>
                    I'm a passionate IT professional with expertise in frontend development and technical support. I create responsive, user-friendly web experiences while providing reliable IT solutions.
                </p>
                <div className={styles.featureList}>
                    <div className={styles.featureItem}>
                        <img src={Certification} alt="Certification" className={styles.featureIcon} />
                        <p >Google IT Support Certified</p>
                    </div>

                    <div className={styles.featureItem}>
                        <img src={Code} alt="Code" className={styles.featureIcon} />
                        <p>BSc Computer Science, UENR</p>
                    </div>

                    <div className={styles.featureItem}>
                        <img src={Graduation} alt="Graduation" className={styles.featureIcon} />
                        <p>1+ years Frontend Experience</p>
                    </div>
                    <div className={styles.featureItem}>
                        <img src={Support} alt="Support" className={styles.featureIcon} />
                        <p>2+ years Technical Support Experience</p>
                    </div>
                    <div className={styles.featureButton}>
                        <p>Learn More about Me</p>
                    </div>
                </div>
            </section>
            <section className={styles.skillsSection}>
                <h2 className={styles.SkillsSectionTitle}>My Skills</h2>
                <div className={styles.skillList}>
                    <div className={styles.skillItem}>
                        <img src={Networking} alt="Networking" className={styles.skillIcon} />
                        <h3>Networking</h3>
                        <p>Network setup & security implementation</p>
                    </div>
                    <div className={styles.skillItem}>
                        <img src={Responsive} alt="Responsive Design" className={styles.skillIcon} />
                        <h3>Responsive</h3>
                        <p>Mobbile-first desing approach</p>
                    </div>
                    <div className={styles.skillItem}>
                        <img src={Code} alt="Coding" className={styles.skillIcon} />
                        <h3>Frontend Dev</h3>
                        <p>HTML, CSS, JavaScript, React</p>
                    </div>
                    <div className={styles.skillItem}>
                        <img src={Support} alt="IT-Support" className={styles.skillIcon} />
                        <h3>IT Support</h3>
                        <p>Technical troubleshooting & user support</p>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    );
};

export default HomePage;