import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { BriefcaseIcon, BuildingIcon, UsersIcon, StarIcon } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="p-6 glass rounded-xl text-center"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6,
            delay
          }
        }
      }}
    >
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
        <div className="text-primary-600">{icon}</div>
      </div>
      <motion.h3 
        className="mb-2 text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay + 0.3 }}
      >
        {value}
      </motion.h3>
      <p className="text-neutral-600">{label}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <BuildingIcon size={30} />,
      value: '500+',
      label: 'Premium Agencies',
      delay: 0.1,
    },
    {
      icon: <BriefcaseIcon size={30} />,
      value: '10,000+',
      label: 'Jobs Posted Monthly',
      delay: 0.2,
    },
    {
      icon: <UsersIcon size={30} />,
      value: '250,000+',
      label: 'Job Seekers',
      delay: 0.3,
    },
    {
      icon: <StarIcon size={30} />,
      value: '98%',
      label: 'Satisfaction Rate',
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            By the Numbers
          </motion.h2>
          <motion.p
            className="text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            AgencyLink is the leading hub connecting elite recruitment agencies with top talent and companies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;