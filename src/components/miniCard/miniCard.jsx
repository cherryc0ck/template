import React, { useState } from 'react';
import styles from './miniCard.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const MiniCard = ({ title, koreaTitle }) => {
  return (
    <article>
      <div className={styles.left}>
        <div className={cx('icon', `${title}`)}></div>
        <span className={styles.title}>{koreaTitle}</span>
      </div>
      <div className={styles.right}>
        <p className={styles.number}>6천</p>
        <span className={styles.percent}>28%</span>
      </div>
    </article>
  );
};

export default MiniCard;