import { useState } from 'react';
import Header from './Components/Header/Header';
import Tabs, { TabType } from './Components/Tabs/Tabs';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Acquired from './Components/Acquired-Skills/Acquired';
import Skills from './Components/Skills/Skills';
import { personalInfo, experience, education, skills, acquiredSkills } from './data/resumeData';
import styles from './App.module.css';

const App = () => {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  return (
    <div className={styles.resumeContainer}>
      <Header />
      
      <section className={styles.mainContent}>
        <div className={styles.summary}>
          <h3>About Me</h3>
          <p>{personalInfo.summary}</p>
        </div>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'experience' && <Experience experience={experience} />}
        {activeTab === 'education' && <Education education={education} />}
        {activeTab === 'Acquired Skills' && <Acquired acquired={acquiredSkills}/>}
      </section>

      {/* Skills as an independent section */}
      <section className={styles.skillsSection}>
        <Skills skills={skills} />
      </section>
    </div>
  );
};

export default App;
