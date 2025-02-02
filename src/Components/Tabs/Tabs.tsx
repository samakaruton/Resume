import styles from './Tabs.module.css';

export type TabType = 'experience' | 'education'| 'Acquired Skills';

export const tabOptions: TabType[] = ['experience', 'education', 'Acquired Skills'];

interface TabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => (
  <div className={styles.tabs}>
    {tabOptions.map(tab => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={activeTab === tab ? styles.active : ''}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
);

export default Tabs;
