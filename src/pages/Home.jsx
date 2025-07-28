import React from "react";

import HeroSlider from "../components/HeroSlider";
import OurProducts from "../components/OurProducts"; 
import ScrollingBanner from "../components/ScrollingBanner";
import CategoryBanner from "../components/CategoryBanner";
import FeaturedCollection from "../components/FeaturedCollection";
import FeaturedCollection2 from "../components/FeaturedCollection2";
import FeaturedCollection3 from "../components/FeaturedCollection3";
import AboutUsBanner from "../components/AboutUsBanner";
import MediaGridSection from "../components/MediaGridSection";
import BrasSection from "../components/BrasSection";
import PressCarousel from "../components/PressCarousel";
import BraPantySection from "../components/BraPantySection";
import FaqSection from "../components/FaqSection";
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
  <PageTransition>
      <HeroSlider />
      <OurProducts /> 
      <ScrollingBanner />
      <CategoryBanner />
      <FeaturedCollection />
      <FeaturedCollection2 />
      <FeaturedCollection3 />
      <AboutUsBanner />
      <MediaGridSection />
      <BrasSection />
      <PressCarousel />
      <BraPantySection />
      <FaqSection />
    </PageTransition>
  );
};

export default Home;
