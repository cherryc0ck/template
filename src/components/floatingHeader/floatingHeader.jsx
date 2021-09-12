import React, { useState } from 'react';
import DateFilter from '../dateFilter/dateFilter';
import MiniCard from '../miniCard/miniCard';
import styles from './floatingHeader.module.css';

const FloatingHeader = (props) => {

  const [title, setTitle] = useState(['sales', 'view', 'session', 'order'])
  const [koreaTitle, setkoreaTitle] = useState(['매출', '페이지뷰', '세션', '주문수']);
  const [percent, setPercent] = useState(['28%', '28%', '0%', '28%']);
  
  return (
    <section className={styles.container}>
      <div className={styles.cardWrapper}>
        {koreaTitle.map((prop, idx) =>{
          return (
            <MiniCard  
              key={idx} 
              title={title[idx]} 
              koreaTitle={prop}
              percent={percent}
            />
          )
        })}
      </div>
      <DateFilter></DateFilter>
    </section>
  );    
};

export default FloatingHeader;