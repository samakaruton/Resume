import styles from './Skills.module.css';

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => (
  <div className={styles.skillsSection}>
    <h3>Skills</h3>
    <ul className={styles.skillsList}>
      {skills.map((skill, index) => (
        <li key={index} className={styles.skillTag}> {/* Fixed class name */}
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
