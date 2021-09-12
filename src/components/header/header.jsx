import React from 'react';
import styles from './header.module.css';


const Header = (props) => {
  return (
    <header className={styles.container}>
      <h1>
        <a href="#" className={styles.logo}>
          <img 
            src="./icon/logo.png" 
            alt="logo"
            className={styles.logoImg}
           />
          <span className={styles.rowthFit}>rowthFit</span>
        </a>
      </h1>
      <div className={styles.env}>
        <img src="./icon/headerLogin.png" alt="login icon" />
        <img src="./icon/headerNotice.png" alt="notice icon" />
        <img src="./icon/headerSettings.png" alt="setting icon"></img>
      </div>
    </header>
  ) 
  
};

export default Header;