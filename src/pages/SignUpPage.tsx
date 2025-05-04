import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import SignUpForm from '../components/auth/SignUpForm';
import { BriefcaseIcon } from 'lucide-react';

const SignUpPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-2xl font-semibold tracking-tight">AgencyLink</span>
            </Link>
          </div>
          <SignUpForm />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default SignUpPage;