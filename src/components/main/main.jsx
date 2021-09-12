import React from 'react';
import CardDataList from '../CardDataList/cardDataList';
import FloatingHeader from '../floatingHeader/floatingHeader';
import Header from '../header/header';
import styles from './main.module.css';

const Main = (props) => {
  return (
    <>
      <Header />
      <FloatingHeader />
      <section>
        <CardDataList />
      </section>
    </>
  )
};

export default Main;