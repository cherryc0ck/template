import React, { useState } from 'react';
import styles from './card.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Card = ({ idx, title, koreaTitle, value }) => {

  const [turn, setTurn] = useState(false);

  const mouseOver = () => {
    setTurn(true);
    console.log("turn on")
  };
  const mouseOut = () => {
    setTurn(false);
    console.log("turn out");
  };

  return (
    <li 
      className={styles.card} 
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <div className={styles.top}>
        <img className={cx('icon', `${title}`)} src={`./icon/card/${title}.png`} />
        <div className={styles.text}>
          <p className={styles.value}>{value}</p>
          <span className={styles.title}>{koreaTitle}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <img src={`./curve/curve${idx}.png`} alter="curve" />
      </div>
    </li>
  )       
};
export default Card;
