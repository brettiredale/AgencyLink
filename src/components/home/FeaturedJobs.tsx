import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CheckCircleIcon, MapPinIcon } from 'lucide-react';
import { formatSalary } from '../../lib/utils';

const featuredJobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechNest Solutions',
    location: 'San Francisco, CA',
    salary: '120000-160000',
    type: 'Full-time',
    postedDate: '2025-04-02T00:00:00Z',
    featured: true,
    logoUrl: 'https://images.pexels.com/photos/2559750/pexels-photo-2559750.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'InnovateSphere',
    location: 'New York, NY',
    salary: '110000-140000',
    type: 'Full-time',
    postedDate: '2025-04-01T00:00:00Z',
    featured: true,
    logoUrl: 'https://images.pexels.com/photos/3215169/pexels-photo-3215169.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'DesignPulse',
    location: 'Remote',
    salary: '90000-120000',
    type: 'Full-time',
    postedDate: '2025-03-31T00:00:00Z',
    featured: true,
    logoUrl: 'https://images.pexels.com/photos/20458790/pexels-photo-20458790/free-photo-of-tech-company-logo-on-blue-background.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    id: 4,
    title: 'Marketing Director',
    company: 'GrowthGenics',
    location: 'Chicago, IL',
    salary: '130000-170000',
    type: 'Full-time',
    postedDate: '2025-03-30T00:00:00Z',
    featured: true,
    logoUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'Analytix',
    location: 'Boston, MA',
    salary: '120000-150000',
    type: 'Full-time',
    postedDate: '2025-03-29T00:00:00Z',
    featured: true,
    logoUrl: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'CloudNative',
    location: 'Austin, TX',
    salary: '110000-140000',
    type: 'Full-time',
    postedDate: '2025-03-28T00:00:00Z',
    featured: true,
    logoUrl: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
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

const FeaturedJobs: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Jobs
          </motion.h2>
          <motion.p 
            className="text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Handpicked opportunities from leading recruitment agencies
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredJobs.map((job) => (
            <motion.div
              key={job.id}
              className="card-glass group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
              variants={item}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 flex-shrink-0 rounded-lg overflow-hidden border border-neutral-200 bg-white p-2">
                  <img 
                    src={job.logoUrl} 
                    alt={job.company} 
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate group-hover:text-primary-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-2">{job.company}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="flex items-center text-neutral-600">
                      <MapPinIcon className="mr-1 h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center text-neutral-600">
                      <BriefcaseIcon className="mr-1 h-3.5 w-3.5" />
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="font-medium text-primary-700">
                  {formatSalary(job.salary)}
                </div>
                {job.featured && (
                  <span className="flex items-center text-xs font-medium text-success-600">
                    <CheckCircleIcon className="mr-1 h-3.5 w-3.5" />
                    Featured
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <motion.a
            href="/jobs"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Jobs
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;