import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

const agencyLogos = [
  { id: 1, name: 'TalentSphere', src: 'https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 2, name: 'RecruitElite', src: 'https://images.pexels.com/photos/2559750/pexels-photo-2559750.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 3, name: 'NexusHR', src: 'https://images.pexels.com/photos/3215169/pexels-photo-3215169.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 4, name: 'PrimeStaff', src: 'https://images.pexels.com/photos/20458794/pexels-photo-20458794/free-photo-of-logo-on-blue-background.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 5, name: 'TechTalent', src: 'https://images.pexels.com/photos/20458790/pexels-photo-20458790/free-photo-of-tech-company-logo-on-blue-background.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 6, name: 'GlobalHunt', src: 'https://images.pexels.com/photos/18286799/pexels-photo-18286799/free-photo-of-letter-g-logo.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 7, name: 'CareerBridge', src: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 8, name: 'VisionHR', src: 'https://images.pexels.com/photos/11039135/pexels-photo-11039135.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 9, name: 'ApexRecruit', src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 10, name: 'StaffWizard', src: 'https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 11, name: 'TalentFusion', src: 'https://images.pexels.com/photos/2346008/pexels-photo-2346008.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 12, name: 'HireGenius', src: 'https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 13, name: 'PeakTalent', src: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 14, name: 'RecruitX', src: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 15, name: 'HRInnovate', src: 'https://images.pexels.com/photos/5473305/pexels-photo-5473305.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 16, name: 'StaffForge', src: 'https://images.pexels.com/photos/5187233/pexels-photo-5187233.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 17, name: 'TalentEdge', src: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 18, name: 'NextGenHR', src: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 19, name: 'EverRecruit', src: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=120' },
  { id: 20, name: 'PeopleFirst', src: 'https://images.pexels.com/photos/7242958/pexels-photo-7242958.jpeg?auto=compress&cs=tinysrgb&w=120' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300 } },
};

const FeaturedAgencies: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Agencies
        </motion.h2>
        <motion.p 
          className="text-neutral-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Join these leading recruitment agencies who are transforming the industry
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {agencyLogos.map((logo) => (
          <motion.div
            key={logo.id}
            className="group relative flex h-24 items-center justify-center rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:shadow-md"
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-auto max-h-12 w-auto max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-primary-500/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium text-white">{logo.name}</span>
              <ExternalLinkIcon className="ml-1 h-4 w-4 text-white" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12">
        <motion.a
          href="/agencies"
          className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View all agencies <ExternalLinkIcon className="ml-1 h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default FeaturedAgencies;