import styles from './Footer.module.css';
import LinkedInLogo from '../assets/social_logo/linkedin.png';
import GitHubLogo from '../assets/social_logo/github.png';
import TwitterLogo from '../assets/social_logo/twitter.png';
import EmailLogo from '../assets/social_logo/email.png';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contentContainer}>

                <div className={styles.workTogetherContainer}>
                    <h3 className={styles.footerTitle}>Ready to Work Together?</h3>
                    <p className={styles.footerDescription}>
                        Let's discuss how I can help with your IT support needs or web development projects.
                    </p>
                    <div className={styles.getInTouchBtn}>Get in Touch</div>

                </div>

                <div className={styles.footerSocialsContainer}>
                    <div className={styles.footerSocial}>
                        <img src={LinkedInLogo} alt="LinkedIn" className={styles.footerSocialLogo} />
                    </div>
                    <div className={styles.footerSocial}>
                        <img src={GitHubLogo} alt="GitHub" className={styles.footerSocialLogo} />
                    </div>
                    <div className={styles.footerSocial}>
                        <img src={TwitterLogo} alt="Twitter" className={styles.footerSocialLogo} />
                    </div>
                    <div className={styles.footerSocial}>
                        <img src={EmailLogo} alt="Email" className={styles.footerSocialLogo} />
                    </div>
                </div>
            </div>

            <p className={styles.footerCopyrightText}>
                © 2025 EarnestByDesign. All rights reserved.
            </p>

        </footer>
    )
}

export default Footer;