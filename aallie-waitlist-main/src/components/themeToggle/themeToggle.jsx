import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label htmlFor="checkbox" className={styles.checkboxLabel}>
        <i className={`fas fa-moon ${styles.moonIcon}`}></i>
        <i className={`fas fa-sun ${styles.sunIcon}`}></i>
        <span className={styles.ball}></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
