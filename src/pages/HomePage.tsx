import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FeaturedAgencies from '../components/home/FeaturedAgencies';
import FeaturedJobs from '../components/home/FeaturedJobs';
import StatsSection from '../components/home/StatsSection';
import HowItWorks from '../components/home/HowItWorks';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <FeaturedAgencies />
        <HowItWorks />
        <FeaturedJobs />
        <Features />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default HomePage;