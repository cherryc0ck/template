import React from 'react';
import styles from './dateFilter.module.css';

const DateFilter = (props) => {
  return (
    <aside className={styles.container}>
      <div className={styles.monthly}>
        <button className={styles.event}>일간</button>
        <button>주간</button>
        <button>월간</button>
      </div>
      <div className={styles.date}>
        <div className={styles.startContainer}>
          <span className={styles.startDate}>
            2021. 09. 09
          </span>
          <img src="./icon/calender.png" className={styles.calender} />
        </div>
        <span>~</span>
        <span>2021. 09. 20</span>
      </div>
    </aside>
  )     
};

export default DateFilter;