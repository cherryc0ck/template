import React from 'react';
import styles from './cardDataList.module.css';
import Card from '../Card/card';

import cardData from '../../data/cardData.json'

const CardDataList = (props) => {
  console.log(cardData.bigCard);
  return (
    <ul className={styles.container}>
      {cardData.bigCard.map(data=>{
        return (
          <Card
            key={data.index}
            idx={data.index}
            title={data.title}
            koreaTitle={data.koreaTitle}
            value={data.value}
          />
        )
      })}
    </ul>
  )
};

export default CardDataList;