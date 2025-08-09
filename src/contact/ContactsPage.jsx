import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./ContactsPage.module.css";

function ContactsPage() {
    return (
        <>
            <Header />
            <main className={styles.contactsMain}>
                <h1 className={styles.heading}>Contact Me</h1>
                <p className={styles.introText}>Let's connect! Feel free to reach out through any of these channels or send me a message directly.</p>
                <div className={styles.containersWrapper}>
                    {/* Contact Information */}
                    <section className={styles.contactInfo}>
                        <h2>Contact Information</h2>
                        <ul>
                            <li><strong>Email:</strong> ernest@example.com</li>
                            <li><strong>Phone:</strong> +233 123 456 789</li>
                            <li><strong>Location:</strong> Accra, Ghana</li>
                        </ul>
                    </section>

                    {/* Social Media */}
                    <section className={styles.socialInfo}>
                        <h2>Social Media</h2>
                        <ul>
                            <li><a href="https://linkedin.com/in/ernest" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/ernest" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://twitter.com/ernest" target="_blank" rel="noopener noreferrer">Twitter</a></li>
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