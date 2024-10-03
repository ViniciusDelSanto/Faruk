import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import FeaturedMenu from '../../components/Home/FeaturedMenu';
import TeamSection from '../../components/Home/TeamSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <FeaturedMenu />
      <TeamSection />
    </div>
  );
};

export default Home;
