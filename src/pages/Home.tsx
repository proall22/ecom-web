import React from 'react';
import Hero from '../components/Hero';
import LatestCollections from '../components/LatestCollections';
import CategoryGrid from '../components/CategoryGrid';
import SummerCollection from '../components/SummerCollection';
import BrowseByCategory from '../components/BrowseByCategory';

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollections />
      <CategoryGrid />
      <SummerCollection />
      <BrowseByCategory />
    </>
  );
};

export default Home;