import styles from './Acquired.module.css';

interface AcquiredItem {
    amazon: string;
    amazon1: string;
    azure:  string;
    azure1: string;
    git: string;
    git1: string;
    linux: string;
    linux1: string;
}

interface AcquiredProps {
  acquired: AcquiredItem[];
}

const Acquired = ({ acquired }: AcquiredProps) => (
  <div className={styles.acquiredSection}>
    <h3>Acquired Skills</h3>

    {acquired.map((acq, index) => (
      <div key={index} className={styles.acquiredItem}>
        <h4>{acq.amazon1}</h4>
        <p className={styles.description}>{acq.amazon}</p>
      </div>
    ))}

    {acquired.map((acq, index) => (
      <div key={index} className={styles.acquiredItem}>
        <h4>{acq.azure1}</h4>
        <p className={styles.description}>{acq.azure}</p>
      </div>
    ))}

    {acquired.map((acq, index) => (
      <div key={index} className={styles.acquiredItem}>
        <h4>{acq.git1}</h4>
        <p className={styles.description}>{acq.git}</p>
      </div>
    ))}

    {acquired.map((acq, index) => (
      <div key={index} className={styles.acquiredItem}>
        <h4>{acq.linux1}</h4>
        <p className={styles.description}>{acq.linux}</p>
      </div>
    ))}

    

    </div>
);

export default Acquired;