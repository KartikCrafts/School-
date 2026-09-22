import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ActiveTab } from './Navbar';
import { motion } from 'motion/react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenCounselor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCounselor }) => {
  return (
    <footer className="bg-[#241407] text-[#cbb6a1] border-t border-[#452811] text-xs">
      {/* Top Banner in Rich Light/Warm Brown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="border-b border-[#3b210e] py-6 bg-[#331c0c]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#854e25] text-amber-200 flex items-center justify-center shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[#f5ede3] font-bold text-sm">{SCHOOL_INFO.name}</h4>
              <p className="text-[11px] text-[#baa48d]">
                Affiliation: {SCHOOL_INFO.affiliation}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs flex-wrap justify-center">
            <span className="flex items-center gap-1.5 text-amber-300">
              <ShieldCheck className="w-4 h-4" /> ISO 9001:2020 Certified
            </span>
            <span className="flex items-center gap-1.5 text-amber-200">
              <Award className="w-4 h-4" /> A++ Green Campus Rating
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenCounselor}
              className="px-3.5 py-1.5 rounded-lg bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs transition-colors shadow-2xs"
            >
              Ask AI Counselor
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Grid with Scroll Animations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Col 1: About */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-3"
        >
          <h5 className="text-[#f5ede3] font-bold text-sm tracking-tight">About The Academy</h5>
          <p className="leading-relaxed text-[#b59f88] text-xs">
            {SCHOOL_INFO.tagline}. Established in {SCHOOL_INFO.establishedYear}, Oakridge provides an intellectually 
            demanding learning journey backed by a 25-acre natural reserve, orthopedically engineered classroom 
            furniture, modern research labs, and world-class faculty.
          </p>

          <div className="pt-2 space-y-1.5 text-[#ded0bf]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Admissions Desk: {SCHOOL_INFO.admissionDeskPhone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-300 shrink-0" />
              <span>{SCHOOL_INFO.contactEmail}</span>
            </div>
          </div>
        </motion.div>

        {/* Col 2: Campus & Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2.5"
        >
          <h5 className="text-[#f5ede3] font-bold text-xs uppercase tracking-wider text-amber-300">
            Campus & Seating
          </h5>
          <ul className="space-y-1.5">
            <li>
              <button
                onClick={() => onNavigate('campus')}
                className="hover:text-white transition-colors"
              >
                25-Acre Eco Masterplan
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('campus')}
                className="hover:text-white transition-colors"
              >
                Posture Ergonomic Benches
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('campus')}
                className="hover:text-white transition-colors"
              >
                Science & Robotics Hubs
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('campus')}
                className="hover:text-white transition-colors"
              >
                Tagore Central Library
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('tour')}
                className="hover:text-white transition-colors text-amber-200 font-semibold"
              >
                Schedule Physical Campus Tour
              </button>
            </li>
          </ul>
        </motion.div>

        {/* Col 3: Academics & Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-2.5"
        >
          <h5 className="text-[#f5ede3] font-bold text-xs uppercase tracking-wider text-amber-300">
            Academics & Faculty
          </h5>
          <ul className="space-y-1.5">
            <li>
              <button
                onClick={() => onNavigate('courses')}
                className="hover:text-white transition-colors"
              >
                Grade 11 & 12 Specialized Streams
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('courses')}
                className="hover:text-white transition-colors"
              >
                Syllabus & Course Catalog
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('teachers')}
                className="hover:text-white transition-colors"
              >
                Master Faculty Directory (135+)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('teachers')}
                className="hover:text-white transition-colors"
              >
                Book Parent Consultation Slot
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('calendar')}
                className="hover:text-white transition-colors"
              >
                Academic Gazette & Events
              </button>
            </li>
          </ul>
        </motion.div>

        {/* Col 4: Admissions Portal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-2.5"
        >
          <h5 className="font-bold text-xs uppercase tracking-wider text-amber-300">
            Admissions 2027–28
          </h5>
          <ul className="space-y-1.5">
            <li>
              <button
                onClick={() => onNavigate('admission')}
                className="hover:text-white transition-colors font-bold text-[#f5ede3]"
              >
                Online Enrolment Application
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('track')}
                className="hover:text-white transition-colors"
              >
                Track Live Application Dossier
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('fees')}
                className="hover:text-white transition-colors"
              >
                Fee Structure & Aid Calculator
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('tour')}
                className="hover:text-white transition-colors"
              >
                Family Open House Pass
              </button>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright Strip in Warm Coffee */}
      <div className="border-t border-[#3b210e] py-6 text-[#9a8069] text-center text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {SCHOOL_INFO.name}. All Rights Reserved. User Portal & Admissions Engine.</p>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Parent Student Handbook</span>
            <span>•</span>
            <span>Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
