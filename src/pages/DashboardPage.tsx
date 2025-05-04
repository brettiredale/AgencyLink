import React from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/ui/Container';

const DashboardPage: React.FC = () => {
  const { user, profile, loading, isAgency, isJobSeeker, isAdmin } = useAuth();
  
  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <Container>
          <div className="glass-dark text-white rounded-2xl p-8 mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome, {profile?.full_name}</h1>
            <p className="text-white/80">
              {isAgency && "Manage your agency profile and job listings"}
              {isJobSeeker && "Track your job applications and manage your profile"}
              {isAdmin && "Access your admin dashboard to manage the platform"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Content based on user role */}
            {isAgency && (
              <>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Agency Profile</h3>
                  <p className="text-neutral-600 mb-4">Update your agency information, logo, and services offered.</p>
                  <button className="text-primary-600 font-medium">Edit Profile →</button>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Job Listings</h3>
                  <p className="text-neutral-600 mb-4">Manage your active job postings and create new opportunities.</p>
                  <button className="text-primary-600 font-medium">View Jobs →</button>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Applications</h3>
                  <p className="text-neutral-600 mb-4">Review candidate applications for your job listings.</p>
                  <button className="text-primary-600 font-medium">View Applications →</button>
                </div>
              </>
            )}

            {isJobSeeker && (
              <>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">My Profile</h3>
                  <p className="text-neutral-600 mb-4">Update your personal information, resume, and job preferences.</p>
                  <button className="text-primary-600 font-medium">Edit Profile →</button>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Applications</h3>
                  <p className="text-neutral-600 mb-4">Track the status of your job applications.</p>
                  <button className="text-primary-600 font-medium">View Applications →</button>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Saved Jobs</h3>
                  <p className="text-neutral-600 mb-4">Review jobs you've saved for later.</p>
                  <button className="text-primary-600 font-medium">View Saved Jobs →</button>
                </div>
              </>
            )}

            {isAdmin && (
              <>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Agencies</h3>
                  <p className="text-neutral-600 mb-4">Manage all agency accounts and profiles.</p>
                  <button className="text-primary-600 font-medium">Manage Agencies →</button>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Job Seekers</h3>
                  <p className="text-neutral-600 mb-4">Manage job seeker accounts and profiles.</p>
                  <button className="text-primary-600 font-medium">Manage Job Seekers →</button>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Content</h3>
                  <p className="text-neutral-600 mb-4">Manage featured agencies, jobs, and website content.</p>
                  <button className="text-primary-600 font-medium">Manage Content →</button>
                </div>
              </>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </motion.div>
  );
};

export default DashboardPage;