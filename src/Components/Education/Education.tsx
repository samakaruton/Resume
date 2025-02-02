import styles from './Education.module.css';

interface EducationItem {
    institution1: string,
    graduation: string,
    duration1: string,
    institution: string,
    degree: string,
    duration: string,
    institution2: string,
    degree2: string,
    duration2: string
}

interface EducationProps {
  education: EducationItem[];
}

const Education = ({ education }: EducationProps) => (
  <div className={styles.educationSection}>
    <h3>Education</h3>

    {education.map((edu, index) => (
      <div key={index} className={styles.educationItem}>
        <h4>{edu.institution1}</h4>
        <p className={styles.degree}>{edu.graduation}</p>
        <p className={styles.duration}>{edu.duration1}</p>
      </div>
    ))}

    {education.map((edu, index) => (
      <div key={index} className={styles.educationItem}>
        <h4>{edu.institution}</h4>
        <p className={styles.degree}>{edu.degree}</p>
        <p className={styles.duration}>{edu.duration}</p>
      </div>
    ))}

    {education.map((edu, index) => (
      <div key={index} className={styles.educationItem}>
        <h4>{edu.institution2}</h4>
        <p className={styles.degree}>{edu.degree2}</p>
        <p className={styles.duration}>{edu.duration2}</p>
      </div>
    ))}

    

    </div>
);

export default Education;
