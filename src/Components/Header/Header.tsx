import styles from './Header.module.css';
import ContactInfo from '../ContactInfo/ContactInfo';
import { personalInfo } from '../../data/resumeData';
import icon from '../../assets/resume.jpeg';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.profile}>
      <img 
        src={icon} 
        alt="Profile" 
        className={styles.profileImg}
      />
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.title}</h2>
    </div>
    <ContactInfo />
  </header>
);

export default Header;