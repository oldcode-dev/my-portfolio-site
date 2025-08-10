import { memo } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./PortfolioPage.module.css";
import EcommerceImg from "../../assets/ecommerce.png";

// Example project data (could be moved to a separate file for scalability)
const projects = [
    {
        image: EcommerceImg,
        title: "E-commerce Platform",
        description:
            "A fully responsive e-commerce platform with product filtering, user authentication, and payment integration.",
        duration: "Apr 2024 - Present",
        status: "In Progress",
    },
    {
        image: EcommerceImg,
        title: "E-commerce Platform",
        description:
            "A fully responsive e-commerce platform with product filtering, user authentication, and payment integration.",
        duration: "Apr 2024 - Present",
        status: "Completed",
    },
];

// Memoized ProjectCard for performance
const ProjectCard = memo(function ProjectCard({ project }) {
    return (
        <div className={styles.projectCard}>
            <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
                loading="lazy"
                width={320}
                height={180}
            />
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <p className={styles.projectDuration}>
                    <strong>Duration:</strong> {project.duration}
                </p>
                <p className={styles.projectStatus}>
                    <strong>Status:</strong>{" "}
                    <span
                        className={
                            project.status === "Completed"
                                ? styles.statusCompleted
                                : styles.statusInProgress
                        }
                    >
                        {project.status}
                    </span>
                </p>
            </div>
        </div>
    );
});

function PortfolioPage() {
    return (
        <>
            <Header />
            <main className={styles.portfolioMain}>
                <h1 className={styles.heading}>My Portfolio</h1>
                <p className={styles.intro}>Showcasing my projects and professional work</p>

                <section className={styles.skillsSection}>
                    <h3>Frontend Development</h3>
                    <ul className={styles.skillsList}>
                        <li>React & Vite</li>
                        <li>JavaScript (ES6+)</li>
                        <li>HTML5 & CSS3</li>
                        <li>Responsive Design</li>
                        <li>Firebase & Cloud Hosting</li>
                    </ul>
                </section>

                <section className={styles.skillsSection}>
                    <h3>IT Support</h3>
                    <ul className={styles.skillsList}>
                        <li>Network Administration</li>
                        <li>System Security</li>
                        <li>Cloud Services</li>
                        <li>Troubleshooting</li>
                    </ul>
                </section>

                <section className={styles.projectsSection}>
                    <h2>Projects</h2>
                    <div className={styles.projectsGrid}>
                        {projects.map((project, idx) => (
                            <ProjectCard project={project} key={project.title + idx} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default memo(PortfolioPage);