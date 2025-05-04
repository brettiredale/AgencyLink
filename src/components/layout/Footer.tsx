import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { BriefcaseIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-2xl font-semibold tracking-tight">AgencyLink</span>
            </div>
            <p className="mt-4 text-neutral-600">
              Connecting the world's best recruitment agencies with top talent and leading companies.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="#"
                className="rounded-full bg-white p-2 text-neutral-700 transition-colors hover:bg-primary-500 hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 text-neutral-700 transition-colors hover:bg-primary-500 hover:text-white"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 text-neutral-700 transition-colors hover:bg-primary-500 hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 text-neutral-700 transition-colors hover:bg-primary-500 hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base font-semibold text-neutral-800">For Job Seekers</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/jobs" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/agencies" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Find Agencies
                </Link>
              </li>
              <li>
                <Link to="/career-advice" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link to="/sign-up" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-neutral-800">For Agencies</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/for-agencies" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Why Join
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/sign-up" className="text-neutral-600 transition-colors hover:text-primary-500">
                  List Your Agency
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-neutral-800">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-neutral-600 transition-colors hover:text-primary-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-600 transition-colors hover:text-primary-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-neutral-600">
              &copy; {currentYear} AgencyLink. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-sm text-neutral-600 hover:text-primary-500">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-neutral-600 hover:text-primary-500">
                Terms
              </Link>
              <Link to="/cookies" className="text-sm text-neutral-600 hover:text-primary-500">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};