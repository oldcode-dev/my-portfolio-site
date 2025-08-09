import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./PortfolioPage.module.css";

// Example project data
const projects = [
    {
        image: "/assets/projects/project1.png",
        title: "Modern Portfolio Website",
        duration: "Jan 2024 - Mar 2024",
        status: "Completed",
    },
    {
        image: "/assets/projects/project2.png",
        title: "E-commerce Platform",
        duration: "Apr 2024 - Present",
        status: "In Progress",
    },
    {
        image: "/assets/projects/project3.png",
        title: "IT Support Dashboard",
        duration: "Sep 2023 - Dec 2023",
        status: "Completed",
    },
];

function PortfolioPage() {
    return (
        <>
            <Header />
            <main className={styles.portfolioMain}>
                <h1 className={styles.heading}>My Portfolio</h1>
                <section className={styles.skillsSection}>
                    <h2>Skills</h2>
                    <ul className={styles.skillsList}>
                        <li>React & Vite</li>
                        <li>JavaScript (ES6+)</li>
                        <li>HTML5 & CSS3</li>
                        <li>Responsive Design</li>
                        <li>Firebase & Cloud Hosting</li>
                        <li>IT Support & Troubleshooting</li>
                    </ul>
                </section>
                <section className={styles.projectsSection}>
                    <h2>Projects</h2>
                    <div className={styles.projectsGrid}>
                        {projects.map((project, idx) => (
                            <div className={styles.projectCard} key={idx}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.projectImage}
                                />
                                <div className={styles.projectInfo}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
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
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default PortfolioPage;