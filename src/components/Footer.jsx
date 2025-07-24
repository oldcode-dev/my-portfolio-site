import '../components/Footer.css';
import LinkedInLogo from '../assets/social_logo/linkedin.png';
import GitHubLogo from '../assets/social_logo/github.png';
import TwitterLogo from '../assets/social_logo/twitter.png';
import EmailLogo from '../assets/social_logo/email.png';

function Footer() {
    return (
        <footer>
            <h3>Ready to Work Together?</h3>
            <p>Let's discuss how I can help with your IT support needs or web development projects.</p>
            <div className='get-in-touch-btn'>Get in Touch</div>

            <div className="logo-and-title-container">
                <div className="logo-container">
                    <img src="/path/to/logo.png" alt="Company Logo" className="footer-logo" />
                </div>

                <h4>EarnestByDesign</h4>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="socials-container">
                <div className="social linkedin">
                    <img src={LinkedInLogo} alt="LinkedIn" className="social-logo" />
                </div>
                <di className="social github">
                    <img src={GitHubLogo} alt="GitHub" className="social-logo" />
                </di>
                <div className="social twitter">
                    <img src={TwitterLogo} alt="Twitter" className="social-logo" />
                </div>
                <div className="social email">
                    <img src={EmailLogo} alt="Email" className="social-logo" />
                </div>
            </div>
            <p className='copyright-text'>© 2025 EarnestByDesign. All rights reserved.</p>
        </footer>
    )
}

export default Footer;