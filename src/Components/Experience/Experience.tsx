import styles from './Experience.module.css';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience = ({ experience }: ExperienceProps) => (
  <div className={styles.experienceSection}>
    <h3>Experience</h3>
    {experience.map((exp, index) => (
      <div key={index} className={styles.experienceItem}>
        <h4 className={styles.company}>{exp.company}</h4>
        <p className={styles.position}>{exp.position}</p>
        <p className={styles.duration}>{exp.duration}</p>
        <p className={styles.description}>{exp.description}</p>
      </div>
    ))}
  </div>
);

export default Experience;

