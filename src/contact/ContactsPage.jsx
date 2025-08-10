import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./ContactsPage.module.css";
import EmailIcon from "../assets/social_logo/emailColor.png";
import PhoneIcon from "../assets/social_logo/phone.png";
import LocationIcon from "../assets/social_logo/location.png";
import GitHubIcon from "../assets/social_logo/github.png";
import TwitterIcon from "../assets/social_logo/twitter.png";
import WhatsAppIcon from "../assets/social_logo/whatsapp.png";
import LinkedinIcon from "../assets/social_logo/linkedin.png"


function ContactsPage() {
    const contactInfo = [
        {
            icon: EmailIcon,
            heading: "Email",
            subtitle: "ernestfrimpongopoku@outlook.com"
        },
        {
            icon: PhoneIcon,
            heading: "Phone",
            subtitle: "+233 (0) 20 003 7011"
        },
        {
            icon: LocationIcon,
            heading: "Location",
            subtitle: "Techiman, BE/R"
        }
    ];
    return (
        <>
            <Header />
            <main className={styles.contactsMain}>
                <h1 className={styles.heading}>Contact Me</h1>
                <p className={styles.introText}>Let's connect! Feel free to reach out through any of these channels or send me a message directly.</p>
                <div className={styles.containersWrapper}>
                    {/* Contact Information */}
                    <section className={styles.contactInfo}>
                        <h2 className={styles.sectionHeading}>Contact Information</h2>
                        <ul className={styles.infoList}>
                            {contactInfo.map((info, id) => {
                                return (
                                    <li key={id} className={styles.infoItem}>
                                        <div className={styles.iconWrapper}>
                                            <img src={info.icon} alt={info.heading} className={styles.infoIcon} />
                                        </div>
                                        <div className={styles.infoText}>
                                            <p className={styles.infoHeading}>{info.heading}</p>
                                            <p className={styles.infoSubtitle}>{info.subtitle}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                    <section className={styles.socialInfo}>
                        <h2>Social Media</h2>
                        <ul>
                            <li><a href="https://linkedin.com/in/ernest" target="_blank" rel="noopener noreferrer"><img src={LinkedinIcon} alt="" /></a></li>
                            <li><a href="https://github.com/ernest" target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt="" /></a></li>
                            <li><a href="https://twitter.com/ernest" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="" /></a></li>
                        </ul>
                    </section>

                    {/* Contact Form */}
                    <section className={styles.contactFormSection}>
                        <h2>Send a Message</h2>
                        <form className={styles.contactForm}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className={styles.sendButton}>Send</button>
                        </form>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ContactsPage;