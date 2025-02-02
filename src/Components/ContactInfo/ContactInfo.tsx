import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './ContactInfo.module.css';
import { personalInfo } from '../../data/resumeData';

const ContactInfo = () => (
  <div className={styles.contactInfo}>
    <div className={styles.contactItem}>
      <FaEnvelope />
      <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noopener noreferrer">
        {personalInfo.email}
      </a>
    </div>
    <div className={styles.contactItem}>
      <FaPhone />
      <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
    </div>
    <div className={styles.contactItem}>
      <FaLinkedin />
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
    <div className={styles.contactItem}>
      <FaGithub />
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </div>
);

export default ContactInfo;